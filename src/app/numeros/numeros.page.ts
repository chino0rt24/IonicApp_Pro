import { Component, OnInit } from '@angular/core';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  constructor(private progreso1: BarraService) { }

  ngOnInit() {
  }
  subirnumeros1(){
    if(this.progreso1.progrso1==.25){
      this.progreso1.upprogre1();
      console.log(this.progreso1);
    }if(this.progreso1.progrso1==.50){
      console.log('Nivel Realizado');
    }
    else{
      console.log('Te falta nivel');
    }
  }

}
