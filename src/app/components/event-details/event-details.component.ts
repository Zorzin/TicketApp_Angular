import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {EventsService} from '../../services/events.service';
import {SiteEvent} from '../../Models/site-event';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {TicketService} from '../../services/ticket.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  @ViewChild('ticketCodeModal')
  private ticketCodeModal: TemplateRef<any>;

  @ViewChild('confirmModal')
  private confirmModal: TemplateRef<any>;

  private ticketId : number;

  public ticketCode: string;
  public ownerName: string;
  public ownerEmail: string;
  public siteEvent: SiteEvent;
  public bookTicketErrorMessage: boolean;
  public ticketCodeErrorMessage: boolean;
  public modalRef: BsModalRef;

  constructor(
    private ticketService: TicketService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private eventService: EventsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>
      this.eventService.getEvent(+params.get('id'))
        .then((response : SiteEvent)=>{
        this.siteEvent = response;
        this.eventService.getEventTicketsLeft(+params.get('id')).then((response:number)=>{
          this.siteEvent.ticketsLeft = response;
        })
      })
    );
  }

  showModal(template: TemplateRef<any>){
    if(this.modalRef) {
      this.modalRef.hide();
    }
    this.modalRef = this.modalService.show(template);
  }

  bookTicket() {
    if(this.ownerName && this.ownerEmail) {
      this.bookTicketErrorMessage = false;
      this.ticketService.bookTicket(this.ownerName,this.ownerEmail,this.siteEvent.ticketPrice,this.siteEvent.id).then((response : number)=>{
        this.ticketId = response;
        this.showModal(this.ticketCodeModal);
      });
    }
    else {
      this.bookTicketErrorMessage = true;
    }
  }

  verifyCode() {
    if(this.ticketCode) {
      this.ticketCodeErrorMessage = false;
      this.ticketService.verifyCode(this.ticketCode, this.ticketId).then((response : Response)=>{
        console.log(response);
        if(response) {
          this.showModal(this.confirmModal);
        }
      })
    }
    else {
      this.ticketCodeErrorMessage = true;
    }
  }

}
