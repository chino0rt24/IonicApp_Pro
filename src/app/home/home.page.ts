import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private toast: ToastController,private progreso1: BarraService) {}
  ngOnInit() {
  }
  async subirhome1(){
    if(this.progreso1.progrso1==0){
      this.progreso1.upprogre1();
      console.log(this.progreso1);
    }else if(this.progreso1.progrso1>0){
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
