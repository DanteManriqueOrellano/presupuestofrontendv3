import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IInsumo } from '../entity/insumos';
import { InsumoService } from './insumo.service';


@Injectable({
  providedIn: 'root'
})
export class InsumoResolverService implements Resolve<IInsumo[]> {

  constructor(private insumo: InsumoService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IInsumo[] | Observable<IInsumo[]> | Promise<IInsumo[]> {
    return this.insumo.getProducts()
  }

  


}
