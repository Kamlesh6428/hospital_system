import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpclint:HttpClient) { }

baseURL="http://localhost:8080/api/v3"
 //baseURL="http://13.60.86.13:8080/hms/api/v3"


getMedicines():Observable<Medicine[]>{
return this.httpclint.get<Medicine[]>(`${this.baseURL}`)
}
createMedicine(medicine:Medicine):Observable<Medicine>{
  return this.httpclint.post<Medicine>(`${this.baseURL}/insert`,medicine);
}
getMedicineById(id:number):Observable<Medicine>{
return this.httpclint.get<Medicine>(`${this.baseURL}/medicine/${id}`);
}
updateMedicine(id:number,medicine:Medicine):Observable<object>{
return this.httpclint.put<Medicine>(`${this.baseURL}/medicine/${id}`,medicine);
}
delete(id:number):Observable<object>{
return this.httpclint.delete(`${this.baseURL}/medicine/${id}`)
}
}
