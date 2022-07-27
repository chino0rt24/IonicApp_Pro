import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  valor: string;
  valor1: string;
  valor2: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.valor = '0.50';
    this.valor1 = '1';
    this.valor2 = '0.75';
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
