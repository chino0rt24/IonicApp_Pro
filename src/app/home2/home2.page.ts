import { Component, OnInit } from '@angular/core';
import { IonRadio } from '@ionic/angular';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})

export class Home2Page implements OnInit {

  value_selected:string;
  record: boolean;
  displayString = "La respuesta correcta es:";

  constructor() {}
  ngOnInit() {
  }
  verificar(){
    this.record === true ? this.value_selected = 'griff' : this.value_selected = 'biff';
    if (this.record === false) {
      console.log("Hola")
    }else{
      console.log(this.displayString+this.value_selected)
  }
    
  }
  
}
