// import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
// import {TicketService} from "../_services/ticket.service";
// import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
// import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
// import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";
// import {Ticket} from "../_models/ticket.model";
// import {MatTable, MatTableDataSource} from "@angular/material/table";
// import {Router} from "@angular/router";
//
// @Component({
//   selector: 'app-ticket-list',
//   templateUrl: './ticket-list.component.html',
//   styleUrls: ['./ticket-list.component.css']
// })
// export class TicketListComponent implements OnInit {
//   tickets: Ticket[] = [];
//   dataSource = new MatTableDataSource<Ticket>([]);
//   displayedColumns: string[] = ['id', 'dateTime', 'isOpen', 'uploaderName', 'problemDescription'];
//   @ViewChild(MatTable) table!: MatTable<Ticket>;
//   ticketForm: FormGroup = new FormGroup({});
//   @Output() ticketAdded = new EventEmitter<Ticket>();
//
//   constructor(private ticketService: TicketService, private fb: FormBuilder,private router: Router) {
//   }
//
//
//   cancelTicket() {
//     // code to cancel ticket
//     this.ticketForm.reset();
//   }
//
//   ngOnInit(): void {
//     this.ticketForm = this.fb.group({
//       description: ['', Validators.required]
//     });
//     this.ticketService.getTickets().subscribe(data => {
//       this.tickets = data;
//       this.dataSource.data = data;
//     });
//   }
//
//   onSelect(ticket: Ticket): void {
//     // implement logic to show ticket details
//   }
//
//   onSubmit(form: FormGroup) {
//     if (!form.valid) {
//       return;
//     }
//     const newTicket: Ticket = {
//       id: this.generateId(),
//       dateTime: new Date(),
//       isOpen: true,
//       uploaderName: "user1",
//       problemDescription: this.ticketForm.value.description,
//     };
//     this.tickets.push(newTicket);
//     this.ticketAdded.emit(newTicket);
//     this.dataSource.data = this.tickets; // update data source
//
//     form.reset();
//   }
//
//   private generateId() {
//     return Math.floor(Math.random() * 1000);
//   }
//
//   clickedRow() {
//     console.log("click")
//     this.router.navigate(['/home/update']);
//
//   }
// }
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TicketService } from "../_services/ticket.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import {Ticket} from "../_models/ticket.model";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  displayedColumns: string[] = ['id', 'dateTime', 'isOpen', 'uploaderName', 'problemDescription'];
  dataSource = new MatTableDataSource<Ticket>([]);
  ticketForm: FormGroup = new FormGroup({});
  @Output() ticketAdded = new EventEmitter<Ticket>();

  constructor(private ticketService: TicketService, private fb: FormBuilder, private router: Router, private dialog: MatDialog) {
  }

  cancelTicket() {
    // code to cancel ticket
    this.ticketForm.reset();
  }

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      description: ['', Validators.required]
    });

    this.ticketService.getTickets().subscribe(data => {
      this.tickets = data;
      this.dataSource.data = data;
    });
  }

  onSelect(ticket: Ticket): void {
    // implement logic to show ticket details
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    const newTicket: Ticket = {
      id: this.generateId(),
      dateTime: new Date(),
      isOpen: true,
      uploaderName: "user1",
      problemDescription: this.ticketForm.value.description,
    };
    this.tickets.push(newTicket);
    this.ticketAdded.emit(newTicket);
    this.dataSource.data = this.tickets; // update data source
    form.reset();
  }

  private generateId() {
    return Math.floor(Math.random() * 1000);
  }
  onTicketUpdated(updatedTicket: Ticket): void {
    const index = this.tickets.findIndex(t => t.id === updatedTicket.id);
    if (index !== -1) {
      this.tickets[index] = updatedTicket;
      this.dataSource.data = [...this.tickets]; // Update the data source for the ticket list
    }
  }

  clickedRow(ticket: Ticket) {
    console.log(ticket);
    if (ticket.isOpen) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '500px',
        data: ticket
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Update the ticket in the ticket list
          const index = this.tickets.findIndex(t => t.id === ticket.id);
          if (index !== -1) {
            this.tickets[index] = ticket;
            this.dataSource.data = [...this.tickets];
          }

        }
      });
    } else {
      console.log('Closed tickets cannot be edited.');
    }
  }



}

