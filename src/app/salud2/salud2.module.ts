import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Salud2PageRoutingModule } from './salud2-routing.module';

import { Salud2Page } from './salud2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Salud2PageRoutingModule
  ],
  declarations: [Salud2Page]
})
export class Salud2PageModule {}
