
import { ProdottoCarrello } from './carrello';
import { Deserializable } from './deserializable';

export class User {
  [x: string]: any;
  id: number;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  idPartner: string;
  email?: string;
  indirizzo?: string;
  carrelloList?: ProdottoCarrello[];
  num?: number;


  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
