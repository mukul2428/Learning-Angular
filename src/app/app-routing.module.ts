import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepInjectComponent } from './form/dep-inject/dep-inject.component';
import { MergecmpComponent } from './form/mergecmp/mergecmp.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './form/template-driven/template-driven.component';
import { CareComponent } from './health/care/care.component';
import { ContactComponent } from './health/contact/contact.component';
import { HomeComponent } from './health/home/home.component';
import { LoginComponent } from './health/login/login.component';
import { PageNotFoundComponent } from './health/page-not-found/page-not-found.component';
import { PolicyComponent } from './health/policy/policy.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'health/care', component: CareComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'template-form', component: TemplateDrivenComponent},
  { path: 'reactive-form', component: ReactiveFormComponent},
  { path: 'dep-inject', component: DepInjectComponent},
  { path: 'merge-cmp', component: MergecmpComponent},
  // lazy loading
  // { path: 'lazy-loading', loadChildren:'./lazy-loading/lazy-loading.module#LazyLoadingModule'},


  {
    path: 'lazy-loading',
    loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
