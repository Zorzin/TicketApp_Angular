import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {Ticket} from '../Models/ticket';
import {TicketConfirmation} from '../Models/ticket-confirmation';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient, private apiService : ApiService) { }

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  bookTicket(person: string, email: string, price: number, eventId: number) {
    let ticket = this.createTicketObject(person,email,price,eventId);
    return this.http.post(this.apiService.getCreateTicketUrl(),ticket,{headers:this.headers}).toPromise();
  }

  private createTicketObject(person: string, email: string, price: number, eventId: number) {
    let ticket = new Ticket();
    ticket.code = "";
    ticket.email = email;
    ticket.owner = person;
    ticket.isConfirmed = false;
    ticket.price = price;
    ticket.siteEventId = eventId;
    return ticket;
  }

  verifyCode(ticketCode: string, ticketId : number) {
    let body = new TicketConfirmation();
    body.ticketCode = ticketCode;
    body.ticketId = ticketId;
    console.log(body);
    return this.http.post(this.apiService.getConfirmTicketUrl(),body,{headers:this.headers}).toPromise();
  }
}
