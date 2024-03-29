import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  standalone: true,
  imports: [],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss'
})
export class RoomsAddComponent {
  room : RoomList = {
    roomType:'',
    amenities:'',
    checkinTime:new Date(),
    checkoutTime:new Date(),
    photos:'',
    price:0,
    rating:0
  }
}
