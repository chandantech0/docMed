import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectloginComponent } from './shared/selectlogin/selectlogin.component';

const routes: Routes = [
  {
    path: '',
    component: SelectloginComponent,
    pathMatch: 'full'
  },
  {
    path: 'selectLogin',
    component: SelectloginComponent
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor-layout/doctor-layout.module').then(m => m.DoctorLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
