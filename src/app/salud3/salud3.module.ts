import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Salud3PageRoutingModule } from './salud3-routing.module';

import { Salud3Page } from './salud3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Salud3PageRoutingModule
  ],
  declarations: [Salud3Page]
})
export class Salud3PageModule {}
