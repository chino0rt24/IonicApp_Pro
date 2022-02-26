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
    { title: 'Ximopanolti', url: '/folder/folder.module', icon: 'home' },
    { title: 'Kali', url: '/home', icon: 'hand-left' },
    { title: 'Tlapoua', url: '/numeros', icon: 'calculator' },
    { title: 'Tlapali', url: '/customers', icon: 'color-palette' },
    { title: 'salud', url: '/salud',icon:'heart-half'},
  ];
  public appPages3 = [
    { title: 'Ximopanolti', url: '/folder/folder.module', icon: 'home' },
    { title: 'Kali', url: '/home', icon: 'hand-left' },
    { title: 'Tlapoua', url: '/numeros', icon: 'calculator' },
    { title: 'Tlapali', url: '/customers', icon: 'color-palette' },
    { title: 'salud', url: '/salud',icon:'heart-half'},
  ];
}
