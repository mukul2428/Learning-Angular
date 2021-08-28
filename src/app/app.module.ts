import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LazyLoadingModule } from './lazy-loading/lazy-loading.module';
import { FormModule } from './form/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthModule } from './health/health.module';
import { DesignutilityService } from './form/appServices/designutility.service';
// import { AuthInterceptor } from './health/login/auth.interceptor';

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
    FormModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DesignutilityService,
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptor,
  //   multi: true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module is loaded")
  }
}