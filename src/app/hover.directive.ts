// DIRECTIVES ARE BASICALLY COMPONENTS BUT WITHOUT TEMPLATES OR HELPER FUNCTIONS

import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, InjectionToken, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective implements OnInit {

  // @Input() color:string = 'red';
  @Input() appHover:string = 'red';
  doc:any='';

  constructor(private element: ElementRef,
    @Inject(DOCUMENT) private document : Document,
    private renderer : Renderer2,
    ) { 
    // console.log(element.nativeElement);
   }

  ngOnInit(): void {
    // this.element.nativeElement.style.color = this.color;
    // this.renderer.setStyle(this.element.nativeElement,'color',this.color)
    
    this.doc = this.document.getElementById('loginP');
    this.doc.style.color = 'pink'
  }

  // host listener are used to listen to any event happening to the parent
  @HostListener('mouseenter') onMousHover(){
    // this.renderer.setStyle(this.element.nativeElement,'color',this.color)
    this.renderer.setStyle(this.element.nativeElement,'color',this.appHover)
  }

  @HostListener('mouseleave') onMousLeave(){
    this.renderer.setStyle(this.element.nativeElement,'color','black')
  }


}
