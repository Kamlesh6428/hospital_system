import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpclint:HttpClient) { }

 private baseURL="http://localhost:8080/api/v1"
//private baseURL="http://13.60.86.13:8080/hms/api/v1"

getPatientList():Observable<Patient[]>{
  return this.httpclint.get<Patient[]>(`${this.baseURL}`)
}
delete(id:number):Observable<object>{
 return this.httpclint.delete(`${this.baseURL}/patients/${id}`)
}

createPatient(patient:Patient):Observable<Patient>{
   return this.httpclint.post<Patient>(`${this.baseURL}/insert`,patient)
}
getPatientById(id:number):Observable<Patient>{
  return this.httpclint.get<Patient>(`${this.baseURL}/patients/${id}`);
}
updatepatient(id:number,patient:Patient):Observable<object>{
return this.httpclint.put<Patient>(`${this.baseURL}/patients/${id}`,patient)
}
}
