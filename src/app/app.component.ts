import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {RoomsComponent} from './rooms/rooms.component'
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppNavComponent, RouterLink, EmployeeComponent,RouterOutlet,RoomsComponent,NgSwitch,NgSwitchCase,NgSwitchDefault,ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit{
  title = 'hotelinventoryapp';
  role = 'Admin';

  constructor(@Inject(localStorageToken) private localStorage : Storage,
  ){}
  
  @ViewChild('user',{read:ViewContainerRef}) vcr !: ViewContainerRef;

  // @ViewChild('test',{static:true}) name!: ElementRef;
  // ngOnInit(){
  //   this.name.nativeElement.innerText = 'blah blah blah'
  // }

  ngOnInit(){
    this.localStorage.setItem('name','Hilton Hotel')
    
  }
  
  ngAfterViewInit(): void {
      // const componentRef = this.vcr.createComponent(RoomsComponent);
      // componentRef.instance.numberOfRooms = 50;
  }
}
