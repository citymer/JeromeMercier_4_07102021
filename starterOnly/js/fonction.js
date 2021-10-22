function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function closeX(){
  modalbg.style.display = "none";            // fonction qui ferme le formulaire en cliquant sur bouton (X)
}



// Fonction qui permet d afficher une erreur si le prénom n'a pas 2 caractéres minimum
function validPrenom() {
    if (prenom.value.trim().length > 1) {
      prenom.parentElement.setAttribute('data-error-visible','data-error');
      return true
    }else  {
      prenom.parentElement.setAttribute('data-error-visible','true','data-error');
      return false
    }
    
  }

// Fonction qui permet d afficher une erreur si le nom n'a pas 2 caractéres minimum
function validNom() {
    if (nom.value.trim().length > 1) {
      nom.parentElement.setAttribute('data-error-visible','data-error');
      return true
    }else  {
      nom.parentElement.setAttribute('data-error-visible','true','data-error');
      return false
    }
    
  }

  // fonction qui permet d'afficher une erreur si l'email n'est pas valide
  function validEmail(){
    const regex = '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$';
      if (email.value.trim().match(regex)) {
          email.parentElement.setAttribute('data-error-visible','data-error');
          return true
      }else{
        email.parentElement.setAttribute('data-error-visible','true','data-error');
        return false
      }
  }

   // fonction qui permet d'afficher une erreur si la date n'est pas valide
   function validBirthdate (){
    if (birthdate.value.trim().length !== 10) {
      birthdate.parentElement.setAttribute('data-error-visible','true', 'data-error');
      return false    
   }else{
      birthdate.parentElement.setAttribute('data-error-visible', 'data-error');
      return true
   }
}

// fonction qui permet d'afficher une erreur si une valeur n'est pas choisie
function validNbrTournois() {
    if (quantity.value.trim().length === 0 || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true','data-error');
        return false;
 }else{
    quantity.parentElement.setAttribute('data-error-visible', 'data-error');
    return true;
 }
}

//fonction qui permet d'afficher une erreur si une ville n'est pas sélectionnée
function validVilles(){
  const locations = document.querySelectorAll('#villes .checkbox-input');
  villes.setAttribute('data-error-visible','true','data-error');
  for(let i = 0; i < locations.length; i++){
    if(locations[i].checked){
      villes.setAttribute('data-error-visible','data-error');
      return true;
    }
  }
   return false
}

// fonction qui permet d'afficher une erreur si les conditions d'utilisation ne sont pas cochées
function validConditions() {
  if (document.getElementById("condition").checked === true) {
    accepte.setAttribute('data-error-visible','data-error');
    return true;
  }else if(document.getElementById("condition").checked === false) {
    accepte.setAttribute('data-error-visible','true','data-error');
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
  validConditions();
}

// Fonction qui verifie que tous les champs soient "true"
function validFormTrue() {
  if (validPrenom() === true 
  && validNom() === true
  && validEmail() === true
  && validBirthdate() == true
  && validNbrTournois() === true
  && validVilles() === true
  &&validConditions() === true) {
    console.log('yyyyyeesss');
    return true
  }
  console.log('fauxxxxxx');
    return false
}

