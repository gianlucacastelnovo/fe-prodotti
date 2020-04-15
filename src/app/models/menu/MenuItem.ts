import { Deserializable } from '../deserializable';

export class MenuItem // implements Deserializable{
 {
  label: string | null;
  faIcon?: string | null;
  link?: string | null;
  icon?: string | null;
  //hidden: boolean | null;
  items?: MenuItem [] | null;


/*
  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }*/
}
