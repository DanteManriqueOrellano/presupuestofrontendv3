import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ModuloinsumoRoutingModule } from './moduloinsumo-routing.module';
import { InsumoComponent } from './insumo/insumo.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button';
import { GraphQLModule } from 'src/app/graphql.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkinterceptorService } from '../shareServices/networkinterceptor.service';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UploadxlsModule } from 'src/app/uploadxls/uploadxls.module';

@NgModule({
  declarations: [
    InsumoComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ModuloinsumoRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    GraphQLModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    UploadxlsModule

  ],
  exports:[InsumoComponent],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: NetworkinterceptorService, multi: true },
  ]
})
export class ModuloinsumoModule { }
