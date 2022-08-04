import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  constructor(private toast: ToastController,private progreso1: BarraService) { }

  ngOnInit() {
  }
  async subirnumeros1(){
    if(this.progreso1.progrso1==.25){
      this.progreso1.upprogre1();
      console.log(this.progreso1);
    }else if(this.progreso1.progrso1>.25){
      const toast = await this.toast.create({
        message: 'Ya tienes el nivel completado',
        duration: 1000
      });
      toast.present();
    }
    else{
      const toast = await this.toast.create({
        message: 'Te falta nivel',
        duration: 1000
      });
      toast.present();
    }
  }

}
