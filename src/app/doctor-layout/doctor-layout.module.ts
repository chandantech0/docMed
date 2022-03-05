import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorLayoutComponent } from './doctor-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLayoutRouteRoutingModule } from './doctor-layout-route-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    DoctorLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DoctorLayoutRouteRoutingModule
  ]
})
export class DoctorLayoutModule { }
