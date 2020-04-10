// https://nehalist.io/working-with-models-in-angular/  .>sotto model
import { Prodotto } from './prodotto';

export class Carrello {
  id: number;
  name: string;
  description: string;
  path: string;
  idPartner: string;
  num: number;
  prezzo: number;
  prodotto: Prodotto;
}
