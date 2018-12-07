import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne.ts';

@Component({
  selector: 'app-cagnottes',
  templateUrl: './cagnottes.component.html',
  styleUrls: ['./cagnottes.component.css']
})
export class CagnottesComponent implements OnInit {

  cagnottes=[];
  constructor() { }

  ngOnInit()
  {
    this.cagnottes = [
      new Personne("Anino", "Thomas", 45),
      new Personne("Garnier", "Alan", 78),
      new Personne("Freger", "Elodie", 12),
    ]
}
  updateCagnotte()
  {
    console.log("JE PASSE ICI");
    var prix = $(this).parent().parent().children('td').eq(0).text();
    var prixModifie = $(this).parent().parent().children('td').children('input').eq(0).val();
    console.log("edit commande");
    console.log(prix);
    console.log(prixModifie);
    console.log($(this).parent().parent().children('td').eq(0));
    // $(this).parent().parent().children('td').eq(0)
    $(this).parent().parent().children('td').eq(0).empty().append(parseFloat(prix)+parseFloat(prixModifie));
    $(this).parent().parent().children('td').children('input').val(0);
  }
}
