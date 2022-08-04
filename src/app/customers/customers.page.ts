import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(private toast: ToastController,private progreso1: BarraService) { }

  ngOnInit() {
  }
  async subircolor1(){
    if(this.progreso1.progrso1==.50){
      this.progreso1.upprogre1();
      console.log(this.progreso1);
    }else if(this.progreso1.progrso1>.50){
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
