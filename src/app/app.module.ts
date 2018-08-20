import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { EventsComponent } from './components/events/events.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import {EventsService} from './services/events.service';
import {ApiService} from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    EventsService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
