import { Component, OnInit } from '@angular/core';
import Event from "../event";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: Event[] = [
    new Event("Svelte", "Svelte description", "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/full/svelte-logo-vertical.png"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
