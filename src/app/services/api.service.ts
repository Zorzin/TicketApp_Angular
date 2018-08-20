import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "http://localhost:8080";

  constructor() { }

  getEventsUrl() {
    return this.apiUrl + "/events/";
  }
}
