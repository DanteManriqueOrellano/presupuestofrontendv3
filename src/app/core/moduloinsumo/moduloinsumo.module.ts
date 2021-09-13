import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloinsumoRoutingModule } from './moduloinsumo-routing.module';
import { InsumoComponent } from './insumo/insumo.component';


@NgModule({
  declarations: [
    InsumoComponent
  ],
  imports: [
    CommonModule,
    ModuloinsumoRoutingModule
  ],
  exports:[InsumoComponent]
})
export class ModuloinsumoModule { }
