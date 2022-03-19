import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  getData: any;
  data: any;

  constructor(
    private apiService: UsuarioService
  ) { }

  ngOnInit() {
    this.getRecomendaciones();
  }

  getRecomendaciones() {
    this.apiService.recomendaciones().subscribe(
      res => {
        this.getData = res;
        this.data = this.getData['Recomendaciones'];
        console.log(this.getData);
      }
    );
  }

}
