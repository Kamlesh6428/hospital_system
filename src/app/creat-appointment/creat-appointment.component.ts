import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-appointment',
  templateUrl: './creat-appointment.component.html',
  styleUrl: './creat-appointment.component.css'
})
export class CreatAppointmentComponent {

  appointment:Appointment=new Appointment();
constructor(private appointmentservice:AppointmentService,private router:Router){}
saveAppointment(){
this.appointmentservice.createAppointment(this.appointment).subscribe(data=>{
  console.log(data);
  this.goToAppointment();
})
}
  onSubmit(){
    this.saveAppointment();
  }

  goToAppointment(){
    this.router.navigate(['/appointmentlist'])
  }
 
}