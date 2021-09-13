import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./navegacion/navegacion.module').then(m=>m.NavegacionModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoreRoutingModule { }
