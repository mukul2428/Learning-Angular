import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes=[
  {path: '', component:HomeComponent, children:[
    {path: "child1", component:Child1Component},
    {path: "child2", component:Child2Component}
  ] } //this is lazy-loading url
]

@NgModule({
  declarations: [
    Child1Component,
    Child2Component,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyLoadingModule { 
  constructor(){
    console.log("Lazy Module is loaded")
  }
}
