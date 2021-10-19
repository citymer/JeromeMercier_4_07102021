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

const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
btnX.addEventListener("click", closeX);//Ecouter le click sur le bouton (X)
form.prenom.addEventListener('change',function() {
  validPrenom(this);
})
form.nom.addEventListener('change',function() {
  valiNnom(this);
})
// Ecouter la modification de l'email
form.email.addEventListener('change',function() {
  validEmail(this); // Parametre "this" element qui est écouté(email)
})
form.birthdate.addEventListener('change',function(){
  validBirthdate(this);
})
form.addEventListener('submit', (e) => {e.preventDefault();// annule la fonction par défaut du bouton d'envoi
     validPrenom();
     validNom();
     validEmail();
     validBirthdate();
     })

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function closeX(){
  modalbg.style.display = "none";            // fonction qui ferme le formulaire en cliquant sur bouton (X)
}




