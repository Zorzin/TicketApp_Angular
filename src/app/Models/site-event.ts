import {Place} from './place';

export class SiteEvent {
  id: number;
  title: string;
  place: Place;
  time: Date;
  shortDetails: string;
  longDetails: string;
  ticketPrice: number;
  ticketsLeft: number;
  ticketsAmount: number;
}
