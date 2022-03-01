import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Numeros3PageRoutingModule } from './numeros3-routing.module';

import { Numeros3Page } from './numeros3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Numeros3PageRoutingModule
  ],
  declarations: [Numeros3Page]
})
export class Numeros3PageModule {}
