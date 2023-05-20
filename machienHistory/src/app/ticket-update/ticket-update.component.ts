import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../_services/ticket.service';
import { Ticket } from '../_models/ticket.model';

@Component({
  selector: 'app-ticket-update',
  templateUrl: './ticket-update.component.html',
  styleUrls: ['./ticket-update.component.css']
})
export class TicketUpdateComponent  implements OnInit {
  ticket!: Ticket; // Add the ! operator to tell TypeScript that we'll initialize this later

  constructor(private route: ActivatedRoute, private ticketService: TicketService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.ticket) {
      this.ticket.isOpen = false;
    }

    this.ticket = this.ticketService.getTicketById(id)!;// Initialize the ticket property
  }
  updateTicket(): void {
    console.log(this.ticket.isOpen)
    console.log(this.ticket.problemDescription)
    this.ticketService.updateTicket(this.ticket);
  }
}
