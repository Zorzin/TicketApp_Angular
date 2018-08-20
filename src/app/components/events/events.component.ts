import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../services/events.service';
import {SiteEventPreview} from '../../Models/site-event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events : Array<SiteEventPreview> = [];

  constructor(private eventsService : EventsService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents().then( (response : Array<SiteEventPreview>) => {
      this.events = response;
    })
  }

}
