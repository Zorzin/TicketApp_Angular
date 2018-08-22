import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient, private apiService : ApiService) { }

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  getEvents() {
    return this.http.get(this.apiService.getEventsUrl(), {headers: this.headers}).toPromise().catch(this.handleError);
  }

  getEvent(id: number) {
    return this.http.get(this.apiService.getEventUrl() + id, {headers: this.headers}).toPromise().catch(this.handleError);
  }

  getEventTicketsLeft(eventId: number) {
    return this.http.get(this.apiService.getEventTicketsLeftUrl() + eventId, {headers: this.headers}).toPromise().catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
