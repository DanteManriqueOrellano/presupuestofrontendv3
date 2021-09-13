import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsumoComponent } from './insumo/insumo.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloinsumoRoutingModule { }
