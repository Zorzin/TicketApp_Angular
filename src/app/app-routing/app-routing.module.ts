import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from '../components/events/events.component';
import {EventDetailsComponent} from '../components/event-details/event-details.component';

const routes: Routes = [
  { path: '', component: EventsComponent},
  { path: 'event', component: EventDetailsComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes), RouterModule.forChild([ ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
