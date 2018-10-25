function verifierMdp(){
  let mdp1 = $("#mdp").val();
  let mdp2 = $("#verifMdp").val();

  if (mdp1 != mdp2) {
    alert("Les mots de passe saisis ne sont pas identiques.");
    return false;
  }
  else {
    alert("Inscription réussie");
    return true;
  }
}
