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
function validnom() {
    if (prenom.value.trim().length > 1) {
      
      nom.parentElement.setAttribute('data-error-visible','data-error');
      return true
    }else  {
      
      nom.parentElement.setAttribute('data-error-visible','true','data-error');
      return false
    }
    
  }

  // fonction qui permet d'afficher une erreur si l'email n'est pas valide
  function validemail(){
    const regex = '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$';
      if (email.value.trim().match(regex)) {
        console.log('oui');
          email.parentElement.setAttribute('data-error-visible','data-error');
          return true
      }else{
        console.log('non');
        email.parentElement.setAttribute('data-error-visible','true','data-error');
        return false
      }
  }
   // fonction qui permet d'afficher une erreur si la date n'est pas valide
   function validbirthdate (){
    if (birthdate.value.trim().length === 10) {
        birthdate.parentElement.setAttribute('data-error-visible', 'data-error');
        return true
   }else{
    birthdate.parentElement.setAttribute('data-error-visible','true', 'data-error');
    return false
   }
}