import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsumoComponent } from '../moduloinsumo/insumo/insumo.component';
import { NavegacionComponent } from './navegacion.component';



const routes: Routes = [
  {path:"",component:NavegacionComponent,//este es el componente contenedor de los demas sub menues , ademas el path con vacio indica que está entrando a este sistema de rutas
    children:[{
      path:"insumo",component:InsumoComponent
    }]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavegacionRoutingModule { }
