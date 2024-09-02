import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createmedicine',
  templateUrl: './createmedicine.component.html',
  styleUrl: './createmedicine.component.css'
})
export class CreatemedicineComponent {

  medicine:Medicine=new Medicine();
  constructor(private medicineservice:MedicineService, private router:Router){}

  saveMedicines(){
    this.medicineservice.createMedicine(this.medicine).subscribe(data=>{
      console.log(data);
      this.goToMedicine();
    })
  }
  onSubmit(){
   this.saveMedicines();
  }
  goToMedicine(){
    this.router.navigate(['/viewmedicine'])
  }
}
