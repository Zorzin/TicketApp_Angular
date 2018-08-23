import {Place} from './place';

export class SiteEvent {
  id: number;
  title: string;
  place: Place;
  time: string;
  shortDetails: string;
  longDetails: string;
  ticketPrice: number;
  ticketsLeft: number;
  ticketsAmount: number;
}
