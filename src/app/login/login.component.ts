import { Component } from '@angular/core';
import { HoverDirective } from '../hover.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HoverDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private route:Router){}

  email: string = 'Hello';
  passsword: string = 'Admin'
  click() {
    // this.route.navigate(['/rooms','add'])
    this.route.navigateByUrl('/rooms/add')
    
  }
}
