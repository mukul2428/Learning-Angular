import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DepInjectComponent } from './dep-inject/dep-inject.component';
import { MergecmpComponent } from './mergecmp/mergecmp.component';
import { TestdirectiveDirective } from './appDirectives/testdirective.directive';
import { TestPipe } from './appPipes/test.pipe';
import { ManageProductComponent } from './manage-product/manage-product.component';


@NgModule({
  declarations: [
    TemplateDrivenComponent,
    ReactiveFormComponent,
    DepInjectComponent,
    MergecmpComponent,
    TestdirectiveDirective,
    TestPipe,
    ManageProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    TemplateDrivenComponent,
    DepInjectComponent,
    TestPipe
  ]
})
export class FormModule { }
