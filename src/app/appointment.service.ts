import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpclient:HttpClient) { }
   private baseURL="http://localhost:8080/api/v2"
   //private baseURL="http://13.60.86.13:8080/hms/api/v2"

  getAllAppointment():Observable<Appointment[]>{
    return this.httpclient.get<Appointment[]>(`${this.baseURL}`);
  }
createAppointment(appointment:Appointment):Observable<Appointment>{
return this.httpclient.post<Appointment>(`${this.baseURL}/insert`,appointment);
}
deleteAppointment(id:number):Observable<object>{
  return this.httpclient.delete(`${this.baseURL}/appointments/${id}`)
}

}
