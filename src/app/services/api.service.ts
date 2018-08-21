import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "https://localhost:44304/api";

  constructor() { }

  getEventsUrl() {
    return this.apiUrl + "/events/";
  }

  getEventUrl() {
    return this.apiUrl + "/events/";
  }
}
