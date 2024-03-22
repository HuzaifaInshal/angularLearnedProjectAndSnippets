import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RoomsComponent} from './rooms/rooms.component'
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeComponent,RouterOutlet,RoomsComponent,NgSwitch,NgSwitchCase,NgSwitchDefault,ContainerComponent],
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
