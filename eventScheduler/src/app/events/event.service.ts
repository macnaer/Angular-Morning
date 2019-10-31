import Event from "../models/event";
import Skills from '../models/skills.model';
import { Injectable } from '@angular/core';
@Injectable()

export class EventService{
    private events: Event[] = [
        // new Event(
        //     "Svelte",
        //     "Svelte description",
        //     "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/full/svelte-logo-vertical.png",
        //     [
        //         new Skills("Html", "Beginner"),
        //         new Skills("C++", "Beginner")
        //     ]),
    ];
    setEvents(events: Event[]){
        this.events = events;
    }
    getAllEvents(){
        return this.events.slice();
    }
}