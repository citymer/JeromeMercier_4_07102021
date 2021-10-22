// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnX = document.querySelector(".close");//selectionne le bouton (X) du formulaire
const form = document.querySelector("form");
const input = document.querySelector("input");
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const villes = document.getElementById('villes');
const btncparti = document.getElementById('validation');//selectionne le bouton "c'est parti"
const newyork = document.getElementById("newyork");
const sanfrancisco = document.getElementById("sanfrancisco");
const seattle = document.getElementById("seattle");
const chicago = document.getElementById("chicago");
const boston = document.getElementById("boston");
const portland = document.getElementById("portland");
const condition = document.getElementById("condition");
const accepte = document.getElementById("accepte");
const modalvalid = document.getElementsByClassName("modalValid");

/********************************************************************************* */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
btnX.addEventListener("click", closeX);//Ecouter le click sur le bouton (X)

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
//Ecoute le click du bouton
btncparti.addEventListener('click',function(){
  validFormulaire(btncparti);
  //validFormTrue(btncparti);
})

// annule la fonction par défaut du bouton d'envoi
form.addEventListener('submit', (e) => {e.preventDefault();
});
    if (validFormTrue() == true) {
      console.log('c est vrai');
      modalbg.style.display = 'none';
      modalvalid.style.display = 'block';
      //document.querySelector('form').reset();
      }else {
        console.log('c est faux');
        validFormulaire();
      }



