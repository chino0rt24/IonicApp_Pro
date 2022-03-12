import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then( m => m.CustomersPageModule)
  },
  
  {
    path: 'numeros',
    loadChildren: () => import('./numeros/numeros.module').then( m => m.NumerosPageModule)
  },
  
  {
    path:'salud',
    loadChildren:() => import('./salud/salud.module').then(m => m.SaludPageModule)
  },
  
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'home3',
    loadChildren: () => import('./home3/home3.module').then( m => m.Home3PageModule)
  },
  {
    path: 'numeros2',
    loadChildren: () => import('./numeros2/numeros2.module').then( m => m.Numeros2PageModule)
  },
  {
    path: 'numeros3',
    loadChildren: () => import('./numeros3/numeros3.module').then( m => m.Numeros3PageModule)
  },
  {
    path: 'salud2',
    loadChildren: () => import('./salud2/salud2.module').then( m => m.Salud2PageModule)
  },
  {
    path: 'salud3',
    loadChildren: () => import('./salud3/salud3.module').then( m => m.Salud3PageModule)
  },
  {
    path: 'customers2',
    loadChildren: () => import('./customers2/customers2.module').then( m => m.Customers2PageModule)
  },
  {
    path: 'customers3',
    loadChildren: () => import('./customers3/customers3.module').then( m => m.Customers3PageModule)
  },
  {
    path: 'salud',
    loadChildren: () => import('./salud/salud.module').then( m => m.SaludPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  }



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
