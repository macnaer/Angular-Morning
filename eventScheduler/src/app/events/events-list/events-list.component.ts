import { Component, OnInit } from '@angular/core';
import Event from "../../models/event";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: Event[] = [
    new Event("Svelte", "Svelte description", "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/full/svelte-logo-vertical.png"),
    new Event("Angular", "Angular description", "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
