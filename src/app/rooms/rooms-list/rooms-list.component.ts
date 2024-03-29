import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import {  CurrencyPipe, DatePipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { RoomList } from '../rooms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [NgIf,NgFor,NgClass,NgStyle,DatePipe,CurrencyPipe,RouterLink],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  // onpush can only be used on components that are not internally changing data but are relying 
  // on some external input/output data
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit,OnChanges,OnDestroy{

  // recieves state/data from parent (remember state goes down action goes up)
  @Input() roomList:RoomList[] | null = []

  // sends event/action/data to parent (remember state goes down action goes up)
  @Output() roomSelected = new EventEmitter<RoomList>();

  constructor(){}

  ngOnDestroy(): void {
    console.log('Destroyeeeeeeeeeed');
    
  }

  //can only be used for components with input
  ngOnChanges(changes: SimpleChanges): void {
    //detect any changes done in input value
    // doCheck detects any changes done in entire web application
  }

  ngOnInit(): void {
    
  }

  selectRoom(room:RoomList){
    this.roomSelected.emit(room)
  }


}
