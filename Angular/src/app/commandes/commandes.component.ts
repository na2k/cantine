import { Component, OnInit } from '@angular/core';
import { Commande } from '../commande.ts';
import { Plat } from '../plat.ts';
import { Personne } from '../personne.ts';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  commandes=[];
  etats=["en cours", "livrée"];
  constructor() { }

  ngOnInit()
  {
    this.commandes= [
      new Commande(new Personne("Anino", "Thomas", 45), new Plat("Couscous", "Un plat a base de semoule", 10, "image de semoule"), "En cours"),
      new Commande(new Personne("Garnier", "Alan", 78), new Plat("Kebab", "Un plat a base de viande", 6, "image de kebab"), "En cours"),
      new Commande(new Personne("Freger", "Elodie", 12), new Plat("Banane", "Un fruit", 2, "image de banane"), "En cours"),
    ]
    console.log(this.commandes);
  }
  supprimerCommande()
  {
    commandes.splice(this.index)
  }
}
