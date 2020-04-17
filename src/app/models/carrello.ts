// https://nehalist.io/working-with-models-in-angular/  .>sotto model
import { Prodotto } from './prodotto';
import { Deserializable } from './deserializable';

export class ProdottoCarrello implements Deserializable{
  [x: string]: any;
  id: number;
  name: string;
  description: string;
  path: string;
  idPartner: string;
  num: number;
  prezzo: number;
  prodotto: Prodotto;


  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
