import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Event from "../../../models/event";

@Component({
  selector: 'app-events-item',
  templateUrl: './events-item.component.html',
  styleUrls: ['./events-item.component.scss']
})
export class EventsItemComponent implements OnInit {
  @Input() singleEvent: Event;
  @Output() selectedEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onActiveEvent(){
    this.selectedEvent.emit();
  }
}
