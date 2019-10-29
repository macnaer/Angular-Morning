import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Event from "../../models/event";
import Skills from "../../models/skills.model";
import {EventService} from "../event.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  @Output() getSelectedEvent = new EventEmitter<Event>();
  events: Event[];

  AddNewEvent(form: NgForm){
    console.log("new event => ", form.value);
    const value = form.value;
    const newEvents = new Event(value.title, value.description, value.img,
      [
        new Skills("Java", "Beginner"),
        new Skills("Assembler", "Master")
      ]);
    this.events.push(newEvents);
  }
  // AddNewEvent() {
  //   const newEvent = this.eventInputRef.nativeElement.value;
  //   const newDesc = this.descInputRef.nativeElement.value;
  //   const newImg = this.imgInputRef.nativeElement.value;
  //   const newEvents = new Event(newEvent, newDesc, newImg,
  //     [
  //       new Skills("Java", "Beginner"),
  //       new Skills("Assembler", "Master")
  //     ]);
  //   this.events.push(newEvents);
  // }
 
  constructor(private eventService: EventService ) { }

  ngOnInit() {
    this.events = this.eventService.getAllEvents();
  }
 
  onEventSelected(event: Event){
    this.getSelectedEvent.emit(event);
  }
}