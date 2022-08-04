import { Component, OnInit } from '@angular/core';
import { BarraService } from '../services/barra.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.page.html',
  styleUrls: ['./home3.page.scss'],
})
export class Home3Page implements OnInit {

  constructor(private toast: ToastController,private progreso3: BarraService) { }

  ngOnInit() {
  }
  async subirhome3(){
    if(this.progreso3.progrso3==0){
      this.progreso3.upprogre3();
      console.log(this.progreso3);
    }else if(this.progreso3.progrso3>0){
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
        console.log('Te falta nivel');
    }
  }

}
