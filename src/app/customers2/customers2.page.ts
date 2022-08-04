import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-customers2',
  templateUrl: './customers2.page.html',
  styleUrls: ['./customers2.page.scss'],
})
export class Customers2Page implements OnInit {
  value: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: string;
  comp1: string;
  constructor(private toast: ToastController, private progreso2: BarraService){ }

  ngOnInit() {
  }
  async verificar1(){
    if (this.value === 'Rojo') {
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
    if (this.value1 === 'Verde') {
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
    if (this.value2 === 'Azul') {
      console.log('Hola');
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli yei ka akuali ka kaktikak',
        duration: 1000
      });
      toast.present();
    }
  }

  async verificar4(){
    if (this.value3 === 'Blanco') {
      console.log('Hola');
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli naui ka akuali ka kaktikak',
        duration: 1000
      });
      toast.present();
    }
  }

  async verificar5(){
    if (this.value4 === 'Negro') {
      console.log('Hola');
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli makuili ka akuali ka kaktikak',
        duration: 1000
      });
      toast.present();
    }
  }

  async verificar6(){
    if (this.value5 === 'Naranja') {
      console.log('Hola');
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli chikuase ka akuali ka kaktikak',
        duration: 1000
      });
      toast.present();
    }
  }

  async verificar7(){
    if (this.value6 === 'Gris') {
      console.log('Hola');
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli chikome ka akuali ka kaktikak',
        duration: 1000
      });
      toast.present();
    }
  }

  async subircolor2(){
    if(this.value==='Rojo'){
      if(this.value1==='Verde'){
        if (this.value2 === 'Azul') {
          if (this.value3 === 'Blanco') {
            if (this.value4 === 'Negro') {
              if (this.value5 === 'Naranja') {
                if (this.value6 === 'Gris') {
                  if(this.progreso2.progrso2==.50){
                    this.progreso2.upprogre2();
                    console.log(this.progreso2);
                  }else if(this.progreso2.progrso2>.50){
                    const toast = await this.toast.create({
                      message: 'Ya tienes el nivel completado',
                      duration: 1000
                    });
                    toast.present();
                  }
                  else{
                    console.log('Te falta nivel');
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
    }else{
      const toast = await this.toast.create({
        message: 'Falta campo por llenar favor de verificarlo',
        duration: 1000
      });
      toast.present();
    }
  }
}
