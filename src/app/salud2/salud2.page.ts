/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-salud2',
  templateUrl: './salud2.page.html',
  styleUrls: ['./salud2.page.scss'],
})
export class Salud2Page implements OnInit {

  value_selected3: string;
  value_selected4: string;
  value_selected5: string;

  constructor(private toast: ToastController) { }

  ngOnInit() {
  }

  async verificar1(){
    if (this.value_selected3 === 'corazon') {
      console.log('Hola');
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli se ka akuali ka kaktikak',
        duration: 5000
      });
      toast.present();
    }
  }

  async verificar2(){
    if (this.value_selected4 === 'contagiosa') {
      console.log('Hola');
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli ome ka akuali ka kaktikak',
        duration: 4000
      });
      toast.present();
    }
  }

  async verificar3(){
    if (this.value_selected5 === 'estreñimiento') {
      console.log('Hola');
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli yei ka akuali ka kaktikak',
        duration: 3000
      });
      toast.present();
    }
  }

}
