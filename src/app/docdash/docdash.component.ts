import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {

  patients:Patient[]=[];
  constructor(private patientservice:PatientService, private router:Router,private docauthservice:DocauthService){}
  ngOnInit():void{
    this.getPatients();
  }
  getPatients(){
this.patientservice.getPatientList().subscribe(data=>{
  this.patients=data;
})
  }

update(id:number){
this.router.navigate(['updatepatient',id])
}
delete(id:number){
  this.patientservice.delete(id).subscribe(data=>{
    console.log(data);
    this.getPatients();
  })
}
view(id:number){
  this.router.navigate(['viewpatient',id]);
}
logout(){
this.docauthservice.logout();
this.router.navigate(['home'])
}
}
