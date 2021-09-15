export interface DataResponse {
    TodosInsumos:APIResponse<IInsumo[]>
}
export interface APIResponse<T> {
    listaTodosInsumos:T;
}
export interface IInsumo{
    insumo:string;
    precio:number;
    umedida:string;
    id:String;
  }
