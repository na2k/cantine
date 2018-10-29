$( document ).ready(function() {

  $('#enable').hide();
  $('#disable').hide();
  $('.cantiniere').show();
//  $('.all').hide();
  $('#empty').hide();
  let cagnotte = 50;
  let cantiniere = true;
  let plats =  [[],[],[],[],[]];
  let cpt = 0;
  let cout= 0;
  let commandePossible = false;
  var $jourActif;

  $('.cout').append(cout+'€');
  function horloge()
  {
    var date = new Date();
    if((date.getHours() == 10 && date.getMinutes()<30) || date.getHours() < 10)
    {
      commandePossible=true;
      $('#enable').slideDown('slow');
      $('#disable').slideUp('slow');
    }
    else
    {
      $('#enable').slideUp('slow');
      $('#disable').slideDown('slow');
    }
  }
  horloge();

  function showMenu(email)
  {
      if(email=="cantiniere")
      {
        $('#all').hide();
        $('#cantiniere').show();
      }
  }

  $(".jour").on('click', function(){
      $jourActif = $($(this).find('a').attr("href"));
      cpt=$(this).find('a').attr("value");
  });

  function showDish(c)
  {
      $jourActif.empty();
      for(let i = 0;i < plats[c].length; i++)
      {
          $jourActif.append('<li class="standard bgPlat list-group-item d-flex justify-content-between align-items-center plat" value="').texts(plats[c][i]).append('"><img src="images\\burger.jpg" style="width: 100px;" alt="imagePlat">').texts(plats[c][i]).append('<button class="addPlat btn btn-secondary" data-target="'+i+'">Ajouter au panier</button>' +'<button class="delete btn btn-secondary" data-target="'+i+'">X</button></li>');
      }
      if(cantiniere==false)
        $('.delete').hide();
      // else
      //   $('.addPlat').hide();
  }

  $('#addDish').click(function(){
      let plat = $('#plat').val();
      if(plat.length>0)
      {
          plats[cpt].push(text(plat));
          $('#empty').slideUp('slow');
          $('#plat').val('');
          showDish(cpt);
      }
      else
      {
          $('#empty').slideDown('slow');
      }
  });

  $("body").on('click', ".delete", function () {

      $(this).parent().remove();
      plats[cpt].splice($(this).data($jourActif),1)
      showDish(cpt);
  });

  $("body").on('click', ".addPlat", function () { // ajouter un plat au panier sous forme de tableau
    var date=new Date();
    let temp=1+parseInt(cpt);
    if(temp==date.getDay())
    {
      $('#panier').append('<li class="standard bgPlat list-group-item col-12 d-flex justify-content-between align-items-center panier">' +'<img src="images\\burger.jpg" style="width: 70px;" alt="imagePlat">'+ $(this).parent().attr("value") +'<button class="deletePanier btn btn-secondary">X</button></li>');
      cout+=5;
      $('.cout').empty();
      $('.cout').append(cout+'€');
    }
    else
    {
      alert("Vous ne pouvez pas commander pour un autre jour !");
    }
  });



  $("body").on('click', '.deletePanier', function(){ //supprimer un plat du panier
    $(this).parent().remove();
    cout-=5;
    $('.cout').empty();
    $('.cout').append(cout+'€');
  });
});
