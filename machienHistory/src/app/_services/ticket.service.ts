import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Ticket} from "../_models/ticket.model";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [
    { id: 1, dateTime: new Date(), isOpen: true, uploaderName: 'John Doe', problemDescription: 'My computer won\'t start' },
    { id: 2, dateTime: new Date(), isOpen: false, uploaderName: 'Jane Smith', problemDescription: 'I can\'t connect to the internet' },
    { id: 3, dateTime: new Date(), isOpen: true, uploaderName: 'Bob Johnson', problemDescription: 'My printer won\'t print' }
  ];

  constructor() { }

  // method to retrieve all tickets
  getTickets(): Observable<Ticket[]> {
    return of(this.tickets)
  }

  // method to retrieve a specific ticket by id
  getTicketById(id: number): Ticket | undefined {
    return this.tickets.find(ticket => ticket.id === id);
  }



  // method to create a new ticket
  createTicket(ticket: Ticket): void {
    ticket.id = this.tickets.length + 1;
    ticket.dateTime = new Date();
    ticket.isOpen = true;
    this.tickets.push(ticket);
  }

  // method to update an existing ticket
// method to update an existing ticket
  updateTicket(ticket: Ticket): Observable<Ticket[]> {
    const index = this.tickets.findIndex(t => t.id === ticket.id);
    if (index !== -1) {
      this.tickets[index] = ticket;
    }
    console.log(this.tickets)
    return of(this.tickets)
  }

  // method to delete a ticket by id
  deleteTicket(id: number): void {
    const index = this.tickets.findIndex(ticket => ticket.id === id);
    this.tickets.splice(index, 1);
  }
}
