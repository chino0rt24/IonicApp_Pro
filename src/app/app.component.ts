import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages1 = [
    
    { title: 'Ximopanolti', url: '/folder/folder.module', icon: 'home' },
    { title: 'Kali', url: '/home', icon: 'hand-left' },
    { title: 'Tlapoua', url: '/numeros', icon: 'calculator' },
    { title: 'Tlapali', url: '/customers', icon: 'color-palette' },
    { title: 'salud', url: '/salud',icon:'heart-half'},
  ];
  public appPages2 = [
    { title: 'Ximopanolti', url: '/folder2/folder2.component', icon: 'home' },
    { title: 'Kali', url: '/home2', icon: 'hand-left' },
    { title: 'Tlapoua', url: '/numeros2', icon: 'calculator' },
    { title: 'Tlapali', url: '/customers2', icon: 'color-palette' },
    { title: 'salud', url: '/salud2',icon:'heart-half'},
  ];
  public appPages3 = [
    { title: 'Ximopanolti', url: '/folder3/folder3.component', icon: 'home' },
    { title: 'Kali', url: '/home3', icon: 'hand-left' },
    { title: 'Tlapoua', url: '/numeros3', icon: 'calculator' },
    { title: 'Tlapali', url: '/customers3', icon: 'color-palette' },
    { title: 'salud', url: '/salud3',icon:'heart-half'},
  ];
}
