import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {

  patients:Patient[]=[];
  constructor(private patientservice:PatientService,private adminauthsrvice:AdminauthService,private router:Router){}
ngOnInit():void{
this.getPatients();
}


  getPatients(){
    this.patientservice.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }
  delete(id:number){
    this.patientservice.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }
  logout(){
    this.adminauthsrvice.logout()
    this.router.navigate(['home'])
  }
}
