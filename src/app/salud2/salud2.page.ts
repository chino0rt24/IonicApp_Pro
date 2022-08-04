/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-salud2',
  templateUrl: './salud2.page.html',
  styleUrls: ['./salud2.page.scss'],
})
export class Salud2Page implements OnInit {

  value_selected3: string;
  value_selected4: string;
  value_selected5: string;

  constructor(private toast: ToastController, private progreso2: BarraService) { }

  ngOnInit() {
  }

  async verificar1(){
    if (this.value_selected3 === 'corazon') {
      console.log('Hola');
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli se ka akuali ka kaktikak',
        duration: 1000
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
        duration: 1000
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
        duration: 1000
      });
      toast.present();
    }
  }

  async subirsalud2(){
    if (this.value_selected3 === 'corazon') {
      if (this.value_selected4 === 'contagiosa') {
        if (this.value_selected5 === 'estreñimiento') {
          if(this.progreso2.progrso2==.75){
            this.progreso2.upprogre2();
          }else if(this.progreso2.progrso2>.75){
            const toast = await this.toast.create({
              message: 'Ya tienes el nivel completado',
              duration: 1000
            });
            toast.present();
          }else{
            const toast = await this.toast.create({
              message: 'Te falta nivel',
              duration: 1000
            });
            toast.present();
          }
        }else{
          const toast = await this.toast.create({
            message: 'Falta campo por llenar favor de verificarlo',
            duration: 1000
          });
          toast.present();
        }
      }else{
        const toast = await this.toast.create({
          message: 'Falta campo por llenar favor de verificarlo',
          duration: 1000
        });
        toast.present();
      }
    }else{
      const toast = await this.toast.create({
        message: 'Falta campo por llenar favor de verificarlo',
        duration: 1000
      });
      toast.present();
    }
  }

}
