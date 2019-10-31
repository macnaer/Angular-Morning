import { HttpClient } from '@angular/common/http';
import { EventService } from "../events/event.service";
import { Injectable } from '@angular/core';
import  Event  from "../models/event";

@Injectable({providedIn: 'root'})
export class ApiService{
  constructor(private http: HttpClient, private eventService: EventService) {}
  saveEvents() {
    const events = this.eventService.getAllEvents();
    this.http
      .put(
        'https://event-7c503.firebaseio.com/events.json',
        events
      )
      .subscribe(response => {
        console.log(response);
      });
  }
  loadEvents(){
    this.http.get<Event[]>('https://event-7c503.firebaseio.com/events.json')
      .subscribe(events => {
        console.log(events);
        this.eventService.setEvents(events);
      })
  }
}