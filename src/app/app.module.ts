import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LazyLoadingModule } from './lazy-loading/lazy-loading.module';
import { FormModule } from './form/form.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthModule } from './health/health.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HealthModule,
    LazyLoadingModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module is loaded")
  }
}
