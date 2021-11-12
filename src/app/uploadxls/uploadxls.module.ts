import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpxlsComponent } from './upxls/upxls.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    UpxlsComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[UpxlsComponent]
})
export class UploadxlsModule { }
