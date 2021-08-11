import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareComponent } from './health/care/care.component';

const routes: Routes = [
  {path:'health/care', component:CareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
