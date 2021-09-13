import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavegacionRoutingModule } from './navegacion-routing.module';
import { NavegacionComponent } from './navegacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { ModuloinsumoModule } from '../moduloinsumo/moduloinsumo.module';


@NgModule({
  declarations: [
    
    NavegacionComponent
  ],
  imports: [
    CommonModule,
    NavegacionRoutingModule,
    ModuloinsumoModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    
  ],
  exports:[NavegacionComponent]
})
export class NavegacionModule { }
