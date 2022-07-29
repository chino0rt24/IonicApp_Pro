import { Component, OnInit } from '@angular/core';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.page.html',
  styleUrls: ['./salud.page.scss'],
})
export class SaludPage implements OnInit {

  constructor(private progreso1: BarraService) { }

  ngOnInit() {
  }
  subirsalud1(){
    if(this.progreso1.progrso1==.75){
      this.progreso1.upprogre1();
      console.log(this.progreso1);
    }else{
      console.log('Te falta nivel');
    }
  }
}
