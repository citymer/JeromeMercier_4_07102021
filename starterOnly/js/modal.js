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
const input = document.querySelector("input");
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const villes = document.getElementById('villes');
const btncparti = document.getElementById('validation');

const newyork = document.getElementById("newyork").checked;
const sanfrancisco = document.getElementById("sanfrancisco").checked;
const seattle = document.getElementById("seattle").checked;
const chicago = document.getElementById("chicago").checked;
const boston = document.getElementById("boston").checked;
const portland = document.getElementById("portland").checked; 
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
btnX.addEventListener("click", closeX);//Ecouter le click sur le bouton (X)

prenom.addEventListener('change',function() {
  validPrenom(prenom);
})
nom.addEventListener('change',function() {
  validNom(nom);
})
// Ecouter la modification de l'email
email.addEventListener('change',function() {
  validEmail(email); // Parametre element qui est écouté(email)
})
birthdate.addEventListener('change',function(){
  validBirthdate(birthdate);
})
quantity.addEventListener('change',function() {
  validNbrTournois(quantity);
})
btncparti.addEventListener('click',function(){
  validFormulaire(btncparti);
})
form.addEventListener('submit', (e) => {e.preventDefault()});// annule la fonction par défaut du bouton d'envoi

// Permet de controler tous les champs du formulaire
input.addEventListener('change',(e) => {
    switch (e.target.id) {
      case "prenom":
        validPrenom();
        break;
      case "nom":
        validNom();
        break;
      case "email":
        validEmail();
        break;
      case "birthdate":
        validBirthdate();
        break;
      case "quantity":
        validNbrTournois();
        break;
      default:
        null;
        break;          
    }
 })

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function closeX(){
  modalbg.style.display = "none";            // fonction qui ferme le formulaire en cliquant sur bouton (X)
}




