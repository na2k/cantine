$('#enable').hide();
$('#disable').hide();
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

  }
  actualiser();
  setInterval(actualiser,1000);
}

