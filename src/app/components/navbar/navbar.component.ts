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
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule, InputTextModule, CalendarModule, FormsModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;
  visible: boolean = false;
  reservationDate: Date | null = null; 
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder, private vtcService: VtcService) {
    this.reservationForm = this.fb.group({
      First_Name: ['', Validators.required],
      Last_Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Telephone: ['', Validators.required],
      Start_Point: ['', Validators.required],
      Destination: ['', Validators.required],
      Reservation_Date: ['', Validators.required]
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
      const reservationData: Reservation = this.reservationForm.value as Reservation;
      this.vtcService.BookReservation(reservationData).subscribe({
        next: (response) => {
          console.log('Reservation saved!', response);
          this.reservationForm.reset();
          this.visible = false;
        },
        error: (error) => {
          console.error('Error saving reservation', error);
        }
      });
    } else {
      console.log('Form is invalid');
      this.reservationForm.markAllAsTouched(); // Mark all fields as touched to show validation errors

    }
  }
}
