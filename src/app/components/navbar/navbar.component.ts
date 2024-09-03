import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../../Models/Reservation';
import { VtcService } from '../../vtc.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule, InputTextModule, CalendarModule, FormsModule, ReactiveFormsModule, ToastModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [MessageService]
})
export class NavbarComponent {
  isScrolled = false;
  visible: boolean = false;
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder, private vtcService: VtcService, private messageService: MessageService) {
    this.reservationForm = this.fb.group({
      First_Name: ['', Validators.required],
      Last_Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Telephone: ['', Validators.required],
      Start_Point: ['', Validators.required],
      Destination: ['', Validators.required],
      Reservation_Date: ['', Validators.required],
      Reservation_Time: ['', Validators.required]
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  showDialog() {
    this.visible = true;
  }

  saveReservation() {
    if (this.reservationForm.valid) {
      const date = this.reservationForm.get('Reservation_Date')?.value;
      const time = this.reservationForm.get('Reservation_Time')?.value;

      if (date && time) {
        const dateTime = new Date(`${date}T${time}`);
        const formattedTime = dateTime.toISOString().substring(11, 16);

        const reservationData = {
          ...this.reservationForm.value,
          Reservation_Date: `${date} ${formattedTime}`
        };

        this.vtcService.BookReservation(reservationData).subscribe({
          next: (response) => {
           
            this.messageService.add({ severity: 'success', summary: 'Reservation sent successfully!', detail: 'Our operator will call for details' });
            this.reservationForm.reset();
            this.visible = false;
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error saving reservation' });
          }
        });
      } else {
        this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Date and time are required' });
      }
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Please fill all fields' });
      this.reservationForm.markAllAsTouched();
    }
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}
}


// create or replace package PKG_SABA_VTC_RESERVATIONS is
       

//        procedure book_reservation(p_first_name varchar2, p_last_name varchar2, p_email varchar2, p_telephone varchar2,
//           p_start_point varchar2, p_destination varchar2, p_reservation_date varchar2);


// end PKG_SABA_VTC_RESERVATIONS;

// create or replace package body PKG_SABA_VTC_RESERVATIONS is
// procedure book_reservation(p_first_name varchar2, 
//                    p_last_name varchar2, p_email varchar2, p_telephone varchar2,
//           p_start_point varchar2, p_destination varchar2, p_reservation_date varchar2) is
//           begin
//                insert into saba_reservations(first_name, last_name, email, telephone, starting_point, destination, reservation_date)
//                values(p_first_name,p_last_name,p_email, p_telephone, p_start_point, p_destination, p_reservation_date);
          
//           end book_reservation;
  
// end PKG_SABA_VTC_RESERVATIONS;
