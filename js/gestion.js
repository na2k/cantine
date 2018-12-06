var commande= new Array(4);
for(var i=0; i < commande.length; i++)commande[i]=new Array(10);

var cagnotte= new Array(4);
for(var i=0; i < cagnotte.length; i++)cagnotte[i]=new Array(10);

/* Peut être amélioré avec du back (utilisé un tableau au lieux de 2*/

// tableau des commandes
commande[0][0]=new Array(" ");
commande[0][1]=new Array("Jean-pierre");
commande[0][2]=new Array("Philippe");
commande[0][3]=new Array("Patrick");

commande[1][1]=new Array("Tarte aux fraise");
commande[1][2]=new Array("Plat aux tortue");
commande[1][3]=new Array("KFC");

for (var i = 0; i < commande.length; i++) {
  commande[2][i]=new Array('<select class="etat_commande"><option value ="en_preparation" selected>En préparation</option><option value ="en_cours">En cours</option><option value ="termine">Terminé</option></select>');
}
// commande[2][1]=new Array("En cours");
// commande[2][2]=new Array("Terminé");
// commande[2][3]=new Array("En préparation");

console.log(commande.length);

for (i=1; i<commande.length; i++){
$('#tGestioncommande').append('<tr><th scope="row">'+i+'</th><td>'+commande[0][i]+'</td><td>'+commande[1][i]+'</td><td>'+commande[2][i]+'</td>'+'<td><button type="button" class="btn btn-danger deleteCommande" id="'+i+'">Supprimer</button></td>');
}

// supprimer une commande
$("body").on('click', ".deleteCommande", function() {
  console.log("commande supprimée");
  console.log($(this).parent());
  $(this).parent().parent().remove();
  commande.splice($(this).parent().parent(),1);
});

// tableau des cagnottes
cagnotte[0][0]=new Array(" ");
cagnotte[0][1]=new Array("Jean-pierre");
cagnotte[0][2]=new Array("Philippe");
cagnotte[0][3]=new Array("Patrick");

cagnotte[1][0]=new Array(" ");
cagnotte[1][1]=new Array("20");
cagnotte[1][2]=new Array("30");
cagnotte[1][3]=new Array("10");

for (i=1; i<cagnotte.length; i++){
$('#tCagnotte').append('<tr><th scope="row"><div id="Nom">'+cagnotte[0][i]+'</div></th>'+'<td>'+cagnotte[1][i]+' €</td>'+'<td><input type="number"></input></td>'+'<td><button type="button" class="btn btn-success updateCagnotte">Confirmer</button></td></tr>');
}



//tGestioncommande


/*
 <tr>
            <th scope="row">1</th>
            <td>Commande 1</td>
            <td>fraise</td>
            <td> null </td>
            <td><button type="button" class="btn btn-danger">Supprimer</button></td>
          </tr>
*/
