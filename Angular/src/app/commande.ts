import { Plat } from '../plat.ts';
import { Personne } from '../personne.ts';

export class Commande {
  constructor(
      public personne:Personne,
       public plat: Plat,
       public etat: string
       )
       {
         this.personne=personne;
           this.plat = plat;
           this.etat= etat;
       }
}
