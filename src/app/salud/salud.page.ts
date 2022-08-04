import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.page.html',
  styleUrls: ['./salud.page.scss'],
})
export class SaludPage implements OnInit {

  constructor(private toast: ToastController,private progreso1: BarraService) { }

  ngOnInit() {
  }
  async subirsalud1(){
    if(this.progreso1.progrso1==.75){
      this.progreso1.upprogre1();
      console.log(this.progreso1);
    }else if(this.progreso1.progrso1>.75){
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
