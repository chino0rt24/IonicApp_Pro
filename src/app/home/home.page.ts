import { Component, OnInit } from '@angular/core';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private progreso1: BarraService) {}
  ngOnInit() {
  }
  subirhome1(){
    if(this.progreso1.progrso1==0){
      this.progreso1.upprogre1();
      console.log(this.progreso1);
    }else{
      console.log('Ya subio Nivel');
    }
  }
}
