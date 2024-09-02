import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrl: './updatepatient.component.css'
})
export class UpdatepatientComponent {
  id:number=0;
patient:Patient=new Patient();
constructor(private patientservice:PatientService, private route:ActivatedRoute, private router:Router){}
ngOnInit():void{
this.id=this.route.snapshot.params['id'];
this.patientservice.getPatientById(this.id).subscribe(data=>{
  this.patient=data;
})
}
onSubmit(){
this.patientservice.updatepatient(this.id,this.patient).subscribe(data=>{
  console.log(data);
  this.goToDocDash();
}
)}

goToDocDash(){
this.router.navigate(['docdash'])
}
}
