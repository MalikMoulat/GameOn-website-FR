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

const closeBtn = document.querySelectorAll(".close"); // Variable du bouton close du modal 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal(){
  modalbg.style.display = "none";
}



// Vérification des données du formulaire 
document.getElementById("inscription").addEventListener("submit", function(e) {

  // Variable erreur
  let error;

  // DOM Elements form subscribe
  let firstName = document.getElementById("first");
  let lastName = document.getElementById("last");
  let email = document.getElementById("email");
  let birthDate = document.getElementById("birthdate");
  let numberOfTournaments = document.getElementById("quantity");
  let tournamentTown = document.querySelector('input[name="location"]:checked');

  
  

  // Vérification firstName 
  if (!firstName.value){  // Si la valeur de la variable est vide
    error = 'Veuillez renseigner un prénom.'
    document.getElementById("errorFirst").innerHTML = error;
    first.style.border = "2px solid red";
  }else if (firstName.value.length == 1 || firstName.value.length < 2){ // Si value.length == 1 ou < 2
    error = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.'
    document.getElementById("errorFirst").innerHTML = error;
    first.style.border = "2px solid red";
  }else{  // reset le style border et le message si il y a eu une première entrée avec une erreur
    first.style.border = '';
    document.getElementById("errorFirst").innerHTML = '';
  }

  

  // Vérification valeur de lastName existe
  if (!lastName.value){ // Si la valeur de la variable est vide
    error = 'Veuillez renseigner un nom.'
    document.getElementById("errorLast").innerHTML = error;
    last.style.border = "2px solid red";
  }else if (lastName.value.length == 1 || lastName.value.length < 2){ // Si value.length == 1 ou < 2
    error = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    document.getElementById("errorLast").innerHTML = error;
    last.style.border = "2px solid red";
  }else{  // reset le style border et le message si il y a eu une première entrée avec une erreur
    last.style.border = '';
    document.getElementById("errorLast").innerHTML = '';
  }

  // Vérification valeur de email existe
  if (!email.value){
    error = 'Veuillez renseigner une adresse mail.'
    document.getElementById("errorMail").innerHTML = error;
    email.style.border = "2px solid red";
  }else{  // reset le style border et le message si il y a eu une première entrée avec une erreur
    email.style.border = '';
    document.getElementById("errorMail").innerHTML = '';
  }

// Vérification valeur de birthDate existe
  if (!birthDate.value){
    error = 'Vous devez entrer votre date de naissance.'
    document.getElementById("errorBirthDate").innerHTML = error;
    birthdate.style.border = "2px solid red";
  }else{  // reset le style border et le message si il y a eu une première entrée avec une erreur
    birthdate.style.border = '';
    document.getElementById("errorBirthDate").innerHTML = '';
  }

  // Vérification valeur de numberOfTournaments existe
  if (!numberOfTournaments.value){
    error = 'Veuillez renseigner un nombre entre 0 et 99.'
    document.getElementById("errorQuantity").innerHTML = error;
    quantity.style.border = "2px solid red"; 
  }else{  // reset le style border et le message si il y a eu une première entrée avec une erreur
    quantity.style.border = '';
    document.getElementById("errorQuantity").innerHTML = '';
  }

  // Vérification valeur de tournamentTown existe
  if (!tournamentTown){
    error = 'Vous devez choisir une option.';
    document.getElementById("errorCheckLocation").innerHTML = error;
    
  }else{  // reset le message si il y a eu une première entrée avec une erreur
    document.getElementById("errorCheckLocation").innerHTML = '';
  }

  // Vérification id = checkbox1 DOM coché
  if (document.getElementById("checkbox1").checked !== true)
	{
    error = "Vous devez vérifier que vous acceptez les termes et conditions."
    document.getElementById("errorCheckbox1").innerHTML = error;
	}else{  // reset le message si il y a eu une première entrée avec une erreur
    document.getElementById("errorCheckbox1").innerHTML = '';
  }

 


  // Si la variable error est appelée le formulaire ne s'envoie pas sinon OK
  if (error){
    e.preventDefault();
    return false;
  }else{
    alert('formulaire envoyé !');
  }

  

});


