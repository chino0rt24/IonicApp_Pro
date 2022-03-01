import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Customers3Page } from './customers3.page';

const routes: Routes = [
  {
    path: '',
    component: Customers3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Customers3PageRoutingModule {}
