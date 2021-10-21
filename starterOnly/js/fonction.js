// Fonction qui permet d afficher une erreur si le prénom n'a pas 2 caractéres minimum
function validPrenom() {
    if (prenom.value.trim().length > 1) {
        console.log('yes');
      prenom.parentElement.setAttribute('data-error-visible','data-error');
      return true
    }else  {
        console.log('no');
      prenom.parentElement.setAttribute('data-error-visible','true','data-error');
      return false
    }
    
  }

// Fonction qui permet d afficher une erreur si le nom n'a pas 2 caractéres minimum
function validNom() {
    if (nom.value.trim().length > 1) {
      console.log('oui');
      nom.parentElement.setAttribute('data-error-visible','data-error');
      return true
    }else  {
      console.log('non');
      nom.parentElement.setAttribute('data-error-visible','true','data-error');
      return false
    }
    
  }

  // fonction qui permet d'afficher une erreur si l'email n'est pas valide
  function validEmail(){
    const regex = '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$';
      if (email.value.trim().match(regex)) {
          console.log('ouais');
          email.parentElement.setAttribute('data-error-visible','data-error');
          return true
      }else{
          console.log('noooon');
        email.parentElement.setAttribute('data-error-visible','true','data-error');
        return false
      }
  }
   // fonction qui permet d'afficher une erreur si la date n'est pas valide
   function validBirthdate (){
    if (birthdate.value.trim().length !== 10) {
      console.log('pfff!');
      birthdate.parentElement.setAttribute('data-error-visible','true', 'data-error');
      return false    
   }else{
      console.log('youpi');
      birthdate.parentElement.setAttribute('data-error-visible', 'data-error');
      return true
   }
}
// fonction qui permet d'afficher une erreur si une valeur n'est pas choisie
function validNbrTournois() {
  console.log('faux');
    if (quantity.value.trim().length === 0 || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true','data-error');
        return false;
 }else{
   console.log('vrai');
    quantity.parentElement.setAttribute('data-error-visible', 'data-error');
    return true;
 }
}
//fonction qui permet d'afficher une erreur si une ville n'est pas sélectionnée
function validVilles() {
  if (document.getElementById("newyork").checked === true ||
      document.getElementById("sanfrancisco").checked === true ||
      document.getElementById("seattle").checked === true ||
      document.getElementById("chicago").checked === true ||
      document.getElementById("boston").checked === true ||
      document.getElementById("portland").checked === true) {
    console.log('ouhoui');
    villes.setAttribute('data-error-visible','data-error');
    return true;
  }else{
    console.log('nounon');
    villes.setAttribute('data-error-visible','true','data-error');
    return false;
  }
}
// Au clic du bouton "c'est parti", controle tous les champs afin de vérifier qu'ils soient valides
function validFormulaire() {
  validPrenom();
  validNom();
  validEmail();
  validBirthdate();
  validNbrTournois();
  validVilles();
}