import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-numeros2',
  templateUrl: './numeros2.page.html',
  styleUrls: ['./numeros2.page.scss'],
})
export class Numeros2Page implements OnInit {

  constructor(private toast: ToastController, private progreso2: BarraService) { }

  ngOnInit() {
  }
  async subirnumero2(){
    if(this.progreso2.progrso2==.25){
      this.progreso2.upprogre2();
      console.log(this.progreso2);
    }
    else if(this.progreso2.progrso2>0.25){
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
  }

}
