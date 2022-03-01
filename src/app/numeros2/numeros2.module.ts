import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Numeros2PageRoutingModule } from './numeros2-routing.module';

import { Numeros2Page } from './numeros2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Numeros2PageRoutingModule
  ],
  declarations: [Numeros2Page]
})
export class Numeros2PageModule {}
