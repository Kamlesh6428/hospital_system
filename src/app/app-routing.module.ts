import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreatAppointmentComponent } from './creat-appointment/creat-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatPatientComponent } from './creat-patient/creat-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreatemedicineComponent } from './createmedicine/createmedicine.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { UpdatemedicineComponent } from './updatemedicine/updatemedicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminauthguardService } from './adminauthguard.service';
import { DocauthguardService } from './docauthguard.service';

const routes: Routes = [
  {path:'admin',component:AdmindashComponent,canActivate:[AdminauthguardService]},
  {path:'appointmentlist',component:AppointmentComponent,canActivate:[AdminauthguardService]},
  {path:'createappo',component:CreatAppointmentComponent,canActivate:[AdminauthguardService]},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'docdash',component:DocdashComponent,canActivate:[DocauthguardService]},
  {path:'createcom',component:CreatPatientComponent,canActivate:[DocauthguardService]},
  {path:'viewmedicine',component:MedicinelistComponent,canActivate:[DocauthguardService]},
  {path:'createmedicine',component:CreatemedicineComponent,canActivate:[DocauthguardService]},
  {path:'updatepatient/:id',component:UpdatepatientComponent,canActivate:[DocauthguardService]},
  {path:'viewpatient/:id',component:ViewpatientComponent,canActivate:[DocauthguardService]},
  {path:'updatemedicine/:id',component:UpdatemedicineComponent,canActivate:[DocauthguardService]},
  {path:'doclogin',component:DocloginComponent},
  {path:'adlogin',component:AdloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
