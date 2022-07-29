import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarraService {
  public progrso1 = 0;
  public progrso2 = 0;
  public progrso3 = 0;
  constructor() { }
  upprogre1(){
  this.progrso1 = this.progrso1+0.25;
  }
  upprogre2(){
  this.progrso2 = this.progrso2+0.25;
  }
  upprogre3(){
  this.progrso3 = this.progrso3+0.25;
  }
}
