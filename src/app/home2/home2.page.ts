import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})

export class Home2Page implements OnInit {


  value_selected:string;
  value_selected1:string;
  value_selected2:string;

  constructor(private toast : ToastController) {}
  
  ngOnInit() {
  }
  async verificar(){  
    if (this.value_selected === 'biff') {
      console.log("Hola")
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli se ka akuali ka kaktikak',
        duration: 5000
      });
      toast.present();
    }

    if (this.value_selected1 === 'buford') {
      console.log("Hola")
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli ome ka akuali ka kaktikak',
        duration: 4000
      });
      toast.present();
    }
    if (this.value_selected2 === 'griff') {
      console.log("Hola")
    }else{
      const toast = await this.toast.create({
        message: 'tetlanilistli yei ka akuali ka kaktikak',
        duration: 3000
      });
      toast.present();
    }
  }
}
