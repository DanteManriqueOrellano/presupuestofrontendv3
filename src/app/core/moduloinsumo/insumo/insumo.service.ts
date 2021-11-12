import { Injectable } from '@angular/core';
import { IInsumo } from '../entity/insumos';
import {Apollo,gql,QueryRef} from "apollo-angular"
import { BehaviorSubject, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

const QUERY = gql `
query {
  listarInsumos {
    insumo
  }
  
}
`
const MUTATION = gql `
mutation AGREGA_INSUMO($id:ID!,$insumo:String!,$precio:Float!,$umedida:u_medida!,$categoria:String!)
 {
  agregarInsumo(
    id:$id,
    insumo:$insumo,
    precio:$precio,
    umedida:$umedida,
    categoria:$categoria
    ){
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
  private insumosSubject1 = new BehaviorSubject<IInsumo[]>([]);
  insumos1$=this.insumosSubject1.asObservable()
  postsQuery!: QueryRef<any>;
  
  loading: boolean = true;
  posts: any;
  
  
  loading$ = new BehaviorSubject(true);
  
  constructor(private apollo:Apollo) { }
   
  getInsumos():any{
    this.apollo.watchQuery<any>({
      query:QUERY
    }).valueChanges.pipe(
      take(1),
      tap( ({data}) => {
        console.log(data.listarInsumos)
        const listarInsumos = data;
        this.insumosSubject.next(listarInsumos.listarInsumos);
       
      })
    ).subscribe()
    
    
  }
  submit({ id,insumo,precio,umedida,categoria }:any) {
    console.log({ id,insumo,precio,umedida,categoria })
    this.apollo.mutate({
      mutation:MUTATION,
      variables:{
        id:"",
        insumo,
        precio,
        umedida,
        categoria
      }
    }).subscribe();
  }

  
  
}



