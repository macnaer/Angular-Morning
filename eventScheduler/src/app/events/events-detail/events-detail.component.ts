import { Component, OnInit, Input } from '@angular/core';
import  Events  from '../../models/event';


@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss']
})
export class EventsDetailComponent implements OnInit {
  @Input() event: Events;

  constructor() { }

  ngOnInit() {
    console.log("Works", this.event);
  }
  
  

}
