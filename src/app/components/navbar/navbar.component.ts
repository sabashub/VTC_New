import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule, InputTextModule, CalendarModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;
  visible: boolean = false;
  reservationDate: Date | null = null; 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  showDialog() {
    this.visible = true;
  }

  saveReservation() {
    // Implement the logic to save reservation
    console.log('Reservation saved!');
    this.visible = false;
  }
}
