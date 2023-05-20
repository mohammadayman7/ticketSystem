import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TicketService} from "../_services/ticket.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ticket} from "../_models/ticket.model";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit{
  ticket!: Ticket;
  private fb: FormBuilder = new FormBuilder()
  ticketForm!: FormGroup;
  @Output() ticketUpdated = new EventEmitter<Ticket>();

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ticket,private ticketService: TicketService
  ) {
    this.ticket = { ...data }; // Make a copy of the ticket object
  }

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      description: [this.ticket.problemDescription, Validators.required],
      isOpen: [this.ticket.isOpen]
    });
  }

  // onSubmit(): void {
  //   if (!this.ticketForm.valid) {
  //     return;
  //   }
  onSubmit(): void {
      if (!this.ticketForm.valid) {
        return;
      }
    // Create a new ticket object
    const updatedTicket: Ticket = {
      id: this.ticket.id,
      dateTime: this.ticket.dateTime,
      isOpen: this.ticket.isOpen,
      uploaderName: this.ticket.uploaderName,
      problemDescription: this.ticket.problemDescription
    };

    // Apply the form values to the ticket object
    updatedTicket.problemDescription = this.ticketForm.get('description')?.value;
    updatedTicket.isOpen = this.ticketForm.get('isOpen')?.value;

    // Logic for updating the ticket using the ticketService
    this.ticketService.updateTicket(updatedTicket);
    this.ticketUpdated.emit(updatedTicket);
    this.dialogRef.close(); // Close the dialog after the update
  }



  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without saving changes
  }
}
