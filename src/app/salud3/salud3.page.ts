import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-salud3',
  templateUrl: './salud3.page.html',
  styleUrls: ['./salud3.page.scss'],
})
export class Salud3Page implements OnInit {

  constructor(private toast: ToastController,private progreso3: BarraService) { }

  ngOnInit() {
  }
  async subirsalud3(){
  if(this.progreso3.progrso3==0.75){
    this.progreso3.upprogre3();
    console.log(this.progreso3);
  }else if(this.progreso3.progrso3>.75){
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
