import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Customers2PageRoutingModule } from './customers2-routing.module';

import { Customers2Page } from './customers2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Customers2PageRoutingModule
  ],
  declarations: [Customers2Page]
})
export class Customers2PageModule {}
