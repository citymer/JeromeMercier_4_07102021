/*********   DOM Elements   ************/

// bouton "je m'inscris" à la page d'accueil
const modalBtn = document.querySelectorAll(".modal-btn");
// Formulaire
const form = document.querySelector("form");
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const villes = document.getElementById('villes');
const btncparti = document.getElementById('validation');
const newyork = document.getElementById("newyork");
const sanfrancisco = document.getElementById("sanfrancisco");
const seattle = document.getElementById("seattle");
const chicago = document.getElementById("chicago");
const boston = document.getElementById("boston");
const portland = document.getElementById("portland");
const condition = document.getElementById("condition");
const accepte = document.getElementById("accepte");
const btnX = document.querySelector(".close");
const modalbg = document.querySelector(".bground");
//formulaire message validé
const modalvalid = document.querySelector(".bground-valid");
const btnFermer = document.getElementById("btn-fermer");
const closevalid = document.querySelector('#closevalid');

/***************   addEventListener   ************* */

// annule la fonction par défaut du bouton d'envoi
form.addEventListener('submit', (e) => {e.preventDefault();
});

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

btnX.addEventListener("click", closeX);

prenom.addEventListener('change',function() {
  validPrenom(prenom);
})
nom.addEventListener('change',function() {
  validNom(nom);
})
email.addEventListener('change',function() {
  validEmail(email); 
})
birthdate.addEventListener('change',function(){
  validBirthdate(birthdate);
})
quantity.addEventListener('change',function() {
  validNbrTournois(quantity);
})
// Ecoute la modification des villes
newyork.addEventListener('change',function(){
  validVilles(newyork);
})
sanfrancisco.addEventListener('change',function(){
  validVilles(sanfrancisco);
})
seattle.addEventListener('change',function(){
  validVilles(seattle);
})
chicago.addEventListener('change',function(){
  validVilles(chicago);
})
boston.addEventListener('change',function(){
  validVilles(boston);
})
portland.addEventListener('change',function(){
  validVilles(portland);
})
// Ecoute les conditions générales
condition.addEventListener('change',function(){
  validConditions(condition);
})
// ferme le message du formulaire validé
btnFermer.addEventListener('click',(e) => {
  modalvalid.style.display = 'none';
})
// bouton (X) du message formulaire validé
closevalid.addEventListener('click',(closevalidX));


//Message de confirmation aprés controle et validation du formulaire
btncparti.addEventListener('click',function(){
  validFormulaire(btncparti);
 if (validFormTrue() === true) {
   modalbg.style.display = 'none';
   modalvalid.style.display = 'block';
 }
})


