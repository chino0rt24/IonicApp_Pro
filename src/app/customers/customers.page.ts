import { Component, OnInit } from '@angular/core';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(private progreso1: BarraService) { }

  ngOnInit() {
  }
  subircolor1(){
    if(this.progreso1.progrso1==.50){
      this.progreso1.upprogre1();
      console.log(this.progreso1);
    }else{
      console.log('Te falta nivel');
    }
  }

}
