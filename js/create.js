function verifierMdp(){
  let mdp1 = $("#mdp1").val();
  let mdp2 = $("#mdp2").val();

  if (mdp1 != mdp2) {
    alert("Les mots de passe saisis ne correspondent pas.");
    return false;
  }
  else {
    alert("Inscription réussie");
    return true;
  }
}
