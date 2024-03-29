import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent implements OnInit {
  id:number = 0;
  // id$!:Observable<number>;
  id$   = this.router.paramMap.pipe(map(params => params.get("id")));
  constructor(private router:ActivatedRoute){}

  ngOnInit(): void {
    // this.router.params.subscribe((params)=>{this.id = params["id"]}) //causes memory leakage
    // this.id = this.router.snapshot.params["id"]
    // this.id$ = this.router.params.pipe(map(params => params["id"]))
  }
}
