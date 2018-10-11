

$( document ).ready(function() {

  $('#enable').hide();
  $('#disable').hide();
  $('#all').hide();
  $('#cantiniere').show();
  $('#empty').hide();
  let cagnotte = 50;
  let cantiniere = true;
  let plats =  [[],[],[],[],[]];
  let cpt = 0;
  var $jourActif;
  //
  window.onload=function()
  {
    horloge();
  }
  function horloge() {
    function actualiser() {
      var date = new Date();
      if(!((date.getHours == 10 && date.getMinutes<30) || date.getHours < 10))
      {
        $('#enable').slideUp('slow');
        $('#disable').slideDown('slow');
      }
      else
      {
        $('#disable').slideUp('slow');
        $('#enable').slideDown('slow');
      }

    }
    actualiser();
    setInterval(actualiser,1000);
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
          $jourActif.append('<li class="list-group-item d-flex justify-content-between plat" value="'+ plats[c][i] +'">'+ plats[c][i] +'<button class="addPlat btn btn-dark btn-xs" data-target="'+i+'">Ajouter au panier</button>' +'<button class="delete btn btn-dark btn-xs" data-target="'+i+'">X</button></li>');
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
          plats[cpt].push(plat);
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

  $("body").on('click', ".addPlat", function () {
    $('#panier').append($(this).parent().attr("value"));
  });

});
