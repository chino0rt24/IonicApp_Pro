import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Customers2Page } from './customers2.page';

const routes: Routes = [
  {
    path: '',
    component: Customers2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Customers2PageRoutingModule {}
