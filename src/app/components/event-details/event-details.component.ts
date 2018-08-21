import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {EventsService} from '../../services/events.service';
import {SiteEvent} from '../../Models/site-event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  siteEvent: SiteEvent;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>
      this.eventService.getEvent(+params.get('id'))
        .then((response : SiteEvent)=>{
        this.siteEvent = response;
      }
    ));
  }

}
