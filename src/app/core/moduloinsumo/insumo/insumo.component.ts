import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Controls, NgxSubFormComponent } from 'ngx-sub-form';
import { IInsumo } from '../entity/insumos';
import { InsumoService } from './insumo.service';
import { LoadingService } from '../../shareServices/loading.service';

@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html',
  styleUrls: ['./insumo.component.css']
})
export class InsumoComponent extends NgxSubFormComponent<IInsumo>  {
  
  products: IInsumo[];
  insumos$ = this.dataServiceInsumo.insumos$
  
  loading$ = this.loader.loading$;
  
  protected getFormControls(): Controls<IInsumo> {
    return {
      id:new FormControl("kdper"),
      insumo: new FormControl(),
      precio: new FormControl(),
      umedida: new FormControl()

    }
  }

  constructor(
    private route: ActivatedRoute,
    private dataServiceInsumo:InsumoService,
    public loader: LoadingService, 
    ) {
    super();
    this.products = this.route.snapshot.data['products'];
    
  }

  enviarFormulario(){

    this.dataServiceInsumo.getInsumos()
    
  }


}
