import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AppointmentComponent,
    CreatAppointmentComponent,
    HomeComponent,
    DocdashComponent,
    CreatPatientComponent,
    MedicinelistComponent,
    CreatemedicineComponent,
    UpdatepatientComponent,
    ViewpatientComponent,
    UpdatemedicineComponent,
    DocloginComponent,
    AdloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
