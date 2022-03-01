import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Customers3PageRoutingModule } from './customers3-routing.module';

import { Customers3Page } from './customers3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Customers3PageRoutingModule
  ],
  declarations: [Customers3Page]
})
export class Customers3PageModule {}
