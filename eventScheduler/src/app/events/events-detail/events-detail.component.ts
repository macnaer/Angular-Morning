import { Component, OnInit, Input } from '@angular/core';
import  Events  from '../event';


@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss']
})
export class EventsDetailComponent implements OnInit {
  @Input() event: Events;

  constructor() { }

  ngOnInit() {
  }

}
