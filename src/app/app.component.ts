import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RoomsComponent} from './rooms/rooms.component'
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RoomsComponent,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'hotelinventoryapp';
  role = 'Admin';
  
  @ViewChild('user',{read:ViewContainerRef}) vcr !: ViewContainerRef;

  // @ViewChild('test',{static:true}) name!: ElementRef;
  // ngOnInit(){
  //   this.name.nativeElement.innerText = 'blah blah blah'
  // }
  
  ngAfterViewInit(): void {
      const componentRef = this.vcr.createComponent(RoomsComponent);
      // componentRef.instance.numberOfRooms = 50;
  }
}
