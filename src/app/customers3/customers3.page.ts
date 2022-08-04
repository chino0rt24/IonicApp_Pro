import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-customers3',
  templateUrl: './customers3.page.html',
  styleUrls: ['./customers3.page.scss'],
})
export class Customers3Page implements OnInit {

  constructor(private toast: ToastController,private progreso3: BarraService) { }

  ngOnInit() {
  }
  async subircolor3(){
  if(this.progreso3.progrso3==.50){
    this.progreso3.upprogre3();
    console.log(this.progreso3);
  }else if(this.progreso3.progrso3>.50){
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
