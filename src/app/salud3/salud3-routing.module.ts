import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Salud3Page } from './salud3.page';

const routes: Routes = [
  {
    path: '',
    component: Salud3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Salud3PageRoutingModule {}
