/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarraService } from '../services/barra.service';



@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})

export class Home2Page implements OnInit {

  value_selected: string;
  value_selected1: string;
  value_selected2: string;

  constructor(private toast: ToastController, private progreso2: BarraService) {}

  ngOnInit() {
  }

  async verificar2(){
    if (this.value_selected1 === 'buford') {
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
    if (this.value_selected2 === 'griff') {
      console.log('Hola');
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli yei ka akuali ka kaktikak',
        duration: 3000
      });
      toast.present();
    }
  }
  async verificar1(){
    if (this.value_selected === 'biff') {
      console.log('Hola');
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli se ka akuali ka kaktikak',
        duration: 5000
      });
      toast.present();
    }
  }
verificar(){
  if (this.value_selected === 'biff') {
    if (this.value_selected2 === 'griff') {
      if (this.value_selected1 === 'buford') {
        if(this.progreso2.progrso2==0){
          this.progreso2.upprogre2();
          console.log(this.progreso2);
        }else{
          console.log('Te falta nivel');
        }
      }else{
        console.log('Falta campo por llenar favor de verificarlo');
      }
    }else{
      console.log('Falta campo por llenar favor de verificarlo');
    }
  }else{
    console.log('Falta campo por llenar favor de verificarlo');
  }
}
}
