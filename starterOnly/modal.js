function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnX = document.querySelector(".close");//selectionne le bouton (X) du formulaire
const form = document.querySelector("form");//selectionne le formulaire (balise <form>)









// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
btnX.addEventListener("click", closeX);//détecte le click sur le bouton (X)

form.addEventListener('submit', (e) => {e.preventDefault();// annule la fonction par défaut du bouton d'envoi
     let prenom = document.getElementById('prenom');
     let erreur;
     validPrenom();
     if (e = true) {
       alert = 'bravo';
     }
        
     })

prenom.addEventListener('change',(e) => {e.preventDefault();
  prenom.querySelector('.formData');
})



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function closeX(){
  modalbg.style.display = "none";            // fonction qui ferme le formulaire en cliquant sur bouton (X)
}

function validPrenom() {
  prenom.querySelector('.formData')
  if (!prenom.value > 1) {
    prenom.querySelector('.formData');
    return true
  }else if (!prenom.value < 2 || prenom.value == 0) {
    erreur = prenom.parentElement.setAttribute('data-error-visible','data-error')
    return false
  }
  
}


