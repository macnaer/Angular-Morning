import { Component, OnInit, Input } from '@angular/core';
import Event from "../../event";

@Component({
  selector: 'app-events-item',
  templateUrl: './events-item.component.html',
  styleUrls: ['./events-item.component.scss']
})
export class EventsItemComponent implements OnInit {
  @Input() singleEvent: Event;

  constructor() { }

  ngOnInit() {
    console.log("Works",this.singleEvent);
  }

}
