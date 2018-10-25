$("body").on("click",".submitChangesEmail",function(){
  let mail=$(".InputEmail").val();
  let currentMdp = $("#currentPassword").val();
  let msg ="";
  if(currentMdp != "smart")
  {
    msg=msg+("Le mot de passe n'est pas correct.\n");
  }
  if (mail=="")
  {
    msg=msg+"Email non valide.\n";
  }
  if(msg.length==0)
  {
    alert("Changements effectués !");
    return true;
  }
  else
  {
    alert(msg);
    return false;
  }
});

$("body").on("click",".submitChangesPassword",function(){
  let mdp1 = $("#newPassword").val();
  let mdp2 = $("#verifNewPassword").val();
  let currentMdp = $("#currentPassword").val();
  let msg ="";

  if(currentMdp != "smart")
  {
    msg=msg+("Le mot de passe n'est pas correct.\n");
  }
  if (mdp1 != mdp2)
  {
    msg=msg+"Les mots de passe saisis sont différents ou ne sont pas renseignés.\n";
  }

  if(msg.length==0)
  {
    alert("Changements effectués !");
    return true;
  }
  else
  {
    alert(msg);
    return false;
  }
});
