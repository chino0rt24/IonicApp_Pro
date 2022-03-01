import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Numeros3Page } from './numeros3.page';

const routes: Routes = [
  {
    path: '',
    component: Numeros3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Numeros3PageRoutingModule {}
