import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Numeros2Page } from './numeros2.page';

const routes: Routes = [
  {
    path: '',
    component: Numeros2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Numeros2PageRoutingModule {}
