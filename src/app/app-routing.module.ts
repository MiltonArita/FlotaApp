import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importacion de componentes

import { MenuComponent } from './pages/menu/menu.component';
import { TransportistasComponent } from './pages/transportistas/transportistas.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component:LoginComponent },

  { 
    path: '',
    component: MenuComponent,
    
    children:[
      {path:'welcome', component:WelcomeComponent},
      {path:'transportistas', component:TransportistasComponent}
    ]  
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
