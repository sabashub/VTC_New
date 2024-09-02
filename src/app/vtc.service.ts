import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from './Models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class VtcService {
  private apiUrl = 'http://localhost:5120/api/VTC';

  constructor (private http: HttpClient)  { }



  BookReservation(data: Reservation): Observable<any> {
    return this.http.post(`${this.apiUrl}/Book_Reservation`, data);
  }
}
