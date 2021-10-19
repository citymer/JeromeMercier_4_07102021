// Fonction qui permet d afficher une erreur si prénom n'a pas 2 caractéres minimum
function validPrenom() {
    if (prenom.value.trim().length > 1) {
      prenom.parentElement.setAttribute('data-error-visible','data-error');
      return true
    }else  {
      prenom.parentElement.setAttribute('data-error-visible','true','data-error');
      return false
    }
    
  }



function validnom() {
    if (prenom.value.trim().length > 1) {
      console.log('oui');
      nom.parentElement.setAttribute('data-error-visible','data-error');
      return true
    }else  {
      console.log('non');
      nom.parentElement.setAttribute('data-error-visible','true','data-error');
      return false
    }
    
  }