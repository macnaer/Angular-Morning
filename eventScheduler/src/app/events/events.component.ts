import { Component, OnInit } from '@angular/core';
import Event from "../models/event";
//import {EventService} from "./event.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  activeEvent:Event;
  constructor() { }

  ngOnInit() {
  }

}
