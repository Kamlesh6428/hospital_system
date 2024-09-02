import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-patient',
  templateUrl: './creat-patient.component.html',
  styleUrl: './creat-patient.component.css'
})
export class CreatPatientComponent {

  patient:Patient=new Patient();
  constructor(private patientservice:PatientService, private router:Router){}

  savePatient(){
    this.patientservice.createPatient(this.patient).subscribe(data=>{
     console.log(data);
     this.goToPatientList();
    })
  }
  onSubmit(){
        this.savePatient();
  }
  goToPatientList(){
    this.router.navigate(['/docdash'])
  }
}
