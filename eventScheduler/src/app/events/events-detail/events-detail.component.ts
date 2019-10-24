import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import  Events  from '../../models/event';
import Skills from 'src/app/models/skills.model';

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
