import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarraService } from '../services/barra.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  valor1=(this.progreso.progrso1).toString();
  valor2=this.progreso.progrso2.toString();
  valor3=this.progreso.progrso3.toString();

  constructor(private activatedRoute: ActivatedRoute, private progreso: BarraService) {

   }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
