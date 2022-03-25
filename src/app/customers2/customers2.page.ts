import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-customers2',
  templateUrl: './customers2.page.html',
  styleUrls: ['./customers2.page.scss'],
})
export class Customers2Page implements OnInit {
  value:string;
  value1:string;
  value2:string;
  value3:string;
  value4:string;
  value5:string;
  value6:string;
  constructor(private toast : ToastController) { }

  ngOnInit() {
  }
  async verificar(){  
    if (this.value === 'Rojo') {
      console.log("Hola")
    }else if (this.value === 'rojo'){
      console.log("Hola")
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli se ka akuali ka kaktikak',
        duration: 4000
      });
      toast.present();
      
    }

    if (this.value1 === 'Verde') {
      console.log("Hola")
    }else if (this.value1 === 'verde'){
      console.log("Hola")
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli ome ka akuali ka kaktikak',
        duration: 3500
      });
      toast.present();
      
    }

    if (this.value2 === 'Azul') {
      console.log("Hola")
    }else if (this.value2 === 'azul'){
      console.log("Hola")
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli yei ka akuali ka kaktikak',
        duration: 3000
      });
      toast.present();
      
    }

    if (this.value3 === 'Blanco') {
      console.log("Hola")
    }else if (this.value3 === 'blanco'){
      console.log("Hola")
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli naui ka akuali ka kaktikak',
        duration: 2500
      });
      toast.present();
      
    }

    if (this.value4 === 'Negro') {
      console.log("Hola")
    }else if (this.value4 === 'negro'){
      console.log("Hola")
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli makuili ka akuali ka kaktikak',
        
        duration: 2000
      });
      toast.present();
      
    }

    if (this.value5 === 'Naranja') {
      console.log("Hola")
    }else if (this.value5 === 'naranja'){
      console.log("Hola")
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli chikuase ka akuali ka kaktikak',
        
        duration: 1500
      });
      toast.present();
      
    }

    if (this.value6 === 'Gris') {
      console.log("Hola")
    }else if (this.value6 === 'gris'){
      console.log("Hola")
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli chikome ka akuali ka kaktikak',
        duration: 1000
      });
      toast.present();
      
    }
  }
}
