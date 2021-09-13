import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ShellComponent } from './shell/shell.component';
import { NavegacionModule } from './navegacion/navegacion.module';




@NgModule({
  declarations: [
    ShellComponent,
      
  ],
  imports: [
    CommonModule,
    NavegacionModule,
    CoreRoutingModule,
    
   
  ],
  exports:[ShellComponent]
})
export class CoreModule { }
