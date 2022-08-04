import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-numeros3',
  templateUrl: './numeros3.page.html',
  styleUrls: ['./numeros3.page.scss'],
})
export class Numeros3Page implements OnInit {

  constructor(private toast: ToastController,private progreso3: BarraService) { }

  ngOnInit() {
  }
  async subirnumero3(){
  if(this.progreso3.progrso3==.25){
    this.progreso3.upprogre3();
    console.log(this.progreso3);
  }else if(this.progreso3.progrso3>.25){
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
