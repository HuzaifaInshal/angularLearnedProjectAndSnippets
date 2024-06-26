import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'rooms/add',component:RoomsAddComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'rooms',component:RoomsComponent},
    {path:'rooms/:id',component:RoomsBookingComponent},
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'/rooms',pathMatch:'full'},
    {path:'**',redirectTo:'/rooms'},
];
