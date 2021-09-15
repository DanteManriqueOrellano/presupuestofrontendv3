import { Injectable } from '@angular/core';
import { DataResponse, IInsumo } from '../entity/insumos';
import {Apollo,gql} from "apollo-angular"
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
const QUERY = gql `
query {
  listaTodosInsumos {
    insumo
  }
  
}
`
@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  private insumosSubject = new BehaviorSubject<IInsumo[]>([]);
  insumos$=this.insumosSubject.asObservable()
  loading$ = new BehaviorSubject(true);

  constructor(private apollo:Apollo) {
    //this.getInsumos()
   
   }
   getProducts(): Promise<IInsumo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            "id": "0909011e-ff84-4b47-8aa0-e26acbd9e9a9",
            "insumo": "Handmade Steel Chair",
            "precio": 861.00,
            "umedida": "UND"
          },
          {
            "id": "0909011e-ff84-4b47-8aa0-e26acbd9e9a9",
            "insumo": "Handmade Steel Chair",
            "precio": 861.00,
            "umedida": "KG"
          },        
        ])
      }, 3000)
    })
  }
  getInsumos():void{
    this.apollo.watchQuery<any>({
      query:QUERY
    }).valueChanges.pipe(
      take(1),
      tap( ({data}) => {
        const listaTodosInsumos = data;
        this.insumosSubject.next(listaTodosInsumos.listaTodosInsumos);
       
      })
    ).subscribe()



  }
  completo(){
    console.log("termino")
  }
}
