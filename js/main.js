$('#enable').hide();
$('#disable').hide();
$('#all').hide();
$('#cantiniere').show();
$('#empty').hide();
let plats =  [];

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

function showMenu(email)
{
    if(email=="cantiniere")
    {
      $('#all').hide();
      $('#cantiniere').show();
    }
}

function showDish()
{
    $('#listeMenuAdmin').empty();
    for(let i = 0;i < plats.length; i++)
    {
        $('#listeMenuAdmin').append('<li class="list-group-item d-flex justify-content-between plat">'+ plats[i] +'<button class="delete btn btn-dark btn-xs" data-target="'+i+'">X</button></li>');
    }
}

$('#addDish').click(function(){
    let plat = $('#plat').val();
    if(plat.length>0)
    {
        plats.push(plat);
        $('#empty').slideUp('slow');
        $('#plat').val('');
        showDish();
    }
    else
    {
        $('#empty').slideDown('slow');
    }
})

$("#listeMenuAdmin").on('click', '.delete', function () {
  if (confirm("Confirmer la suppression?")) {
    $(this).parent().remove();
    plats.splice($(this).data('listeMenuAdmin'),1)
    showDish();
  }
  else {
    return false;
  }
});
