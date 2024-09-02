import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrl: './viewpatient.component.css'
})
export class ViewpatientComponent {
  id:number=0;
  patient:Patient=new Patient();
constructor(private patientservice:PatientService, private route:ActivatedRoute){}

ngOnInit():void{
  this.id=this.route.snapshot.params['id'];
  this.patientservice.getPatientById(this.id).subscribe(data=>{
    this.patient=data;
  }
  )
}


}
