import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLayoutComponent } from './doctor-layout.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorLayoutComponent,
    children: [
      {
        path: 'chemist',
        loadChildren: () => import('./chemist-list/chemist-list.module').then(m => m.ChemistListModule)
      },
      {
        path: 'medicine',
        loadChildren: () => import('./medicine-list/medicine-list.module').then(m => m.MedicineListModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('./medicine-checkout/medicine-checkout.module').then(m => m.MedicineCheckoutModule)
      },
      {
        path: 'placed',
        component: OrderPlacedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorLayoutRouteRoutingModule { }
