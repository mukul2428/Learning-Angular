import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TemplateDrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TemplateDrivenComponent
  ]
})
export class FormModule { }
