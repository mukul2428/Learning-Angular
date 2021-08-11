import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CareComponent } from './care/care.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    CareComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CareComponent
  ]
})
export class HealthModule { }