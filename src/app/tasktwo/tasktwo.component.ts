import { Component, OnInit } from '@angular/core';
import {Events, EventsService} from '../events.service';
let visibility = false;

@Component({
  selector: 'app-tasktwo',
  providers: [EventsService],
  templateUrl: './tasktwo.component.html',
  styleUrls: ['./tasktwo.component.scss']
})
export class TasktwoComponent implements OnInit {

  constructor(EventsService: EventsService) {
    this.event = EventsService.getCurrent();
  }
  event: Events;

  ngOnInit(): void {
  }
  changeVisibility(): void {
    visibility = !visibility;
  }
}
