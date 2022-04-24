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
const modalbgTanks = document.querySelector(".bgroundthanks"); // Variable modale de remerciement
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const closeBtn = document.querySelectorAll(".close"); // Variable du bouton close du modal
const closeBtnThanks = document.querySelectorAll(".btn-close"); // Variable du bouton close du modal de remerciement

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
closeBtnThanks.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal(){
  modalbg.style.display = "none";
  modalbgTanks.style.display = "none";
}


// Variable affichage erreur
const prénom = 'prénom'; // afficher dans le message d'erreur 
const errorFirst = 'errorFirst'; // ID du <p> (html) pour afficher l'rreur
const firstRed = 'first'; // ID de l'input 

const nom = 'nom';  // afficher dans le message d'erreur 
const errorLast = 'errorLast';  // ID du <p> (html) pour afficher l'rreur
const lastRed = 'last'; // ID de l'input 

const mail = 'mail';  // afficher dans le message d'erreur 
const errorMail = 'errorMail';  // ID du <p> (html) pour afficher l'rreur
const emailred = 'email'; // ID de l'input 

const birthDateErrorMessage = 'Vous devez entrer votre date de naissance.'; // message d'erreur
const errorBirthDateId = 'errorBirthDate';  // ID du <p> (html) pour afficher l'rreur
const birthDateRed = 'birthdate'; // ID de l'input 

const numberOfTournamentsMessage = 'Veuillez renseigner un nombre entre 0 et 99.'; // message d'erreur
const numberOfTournamentsId = 'errorQuantity';  // ID du <p> (html) pour afficher l'rreur
const numberOfTournamentsRed = 'quantity'; // ID de l'input 


//Regex
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;





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

  
  // Fonction 
  function checkValueFormMore(name, errorId, contentError, borderRed, regex) { //  name = Variable,   errorId = id ou le message d'erreur seras affiché, contentError = Contenue du message d'erreur   , borderRed = Id de l'input pour la modification de la couleur du border,   regex = regex a utiliser pour la vérification de la valeur de la variable
      if (!name.value){  // Si la valeur de la variable est vide
          error = 'Veuillez renseigner un '+ contentError +'.'
          document.getElementById(errorId).innerHTML = error;
          document.getElementById(borderRed).style.border = "2px solid red";
      }else if (name.value.length == 1 || name.value.length < 2){ // Si value.length == 1 ou < 2
          error = 'Veuillez entrer 2 caractères ou plus pour le champ du '+ contentError +'.'
          document.getElementById(errorId).innerHTML = error;
          document.getElementById(borderRed).style.border = "2px solid red";
      }else if (regex.test(name.value) !== true){ //Vérification du format de la variable
          error = 'Le format du '+ contentError +' n\'est pas valide.'
          document.getElementById(errorId).innerHTML = error;
          document.getElementById(borderRed).style.border = "2px solid red";
      }else{  // reset le style border et le message si il y a eu une première entrée avec une erreur
          document.getElementById(errorId).innerHTML = '';
          document.getElementById(borderRed).style.border = '';
      }
  }
  
  function checkValueForm(name, errorId, contentError, borderRed){  //  name = Variable,   errorId = id ou le message d'erreur seras affiché, contentError = Contenue du message d'erreur   , borderRed = Id de l'input pour la modification de la couleur du border
      if (!name.value){  // Si la valeur de la variable est vide
          error = contentError;
          document.getElementById(errorId).innerHTML = error;
          document.getElementById(borderRed).style.border = "2px solid red";
      }else{  // reset le style border et le message si il y a eu une première entrée avec une erreur
          document.getElementById(errorId).innerHTML = '';
          document.getElementById(borderRed).style.border = '';
        }
  }


  //Vérification des variables
  checkValueFormMore(firstName, errorFirst, prénom, firstRed, regexName);
  checkValueFormMore(lastName, errorLast, nom, lastRed, regexName);
  checkValueFormMore(email, errorMail, mail, emailred, regexEmail);
  
  checkValueForm(birthDate, errorBirthDateId, birthDateErrorMessage, birthDateRed);
  checkValueForm(numberOfTournaments, numberOfTournamentsId, numberOfTournamentsMessage, numberOfTournamentsRed);
  

  // Vérification valeur de tournamentTown existe
  if (!tournamentTown){  // Si la variable est vide
    error = 'Vous devez choisir une option.';
    document.getElementById("errorCheckLocation").innerHTML = error; 
  }else{  // reset le message si il y a eu une première entrée avec une erreur
    document.getElementById("errorCheckLocation").innerHTML = '';
  }

  // Vérification id = checkbox1 DOM coché
  if (document.getElementById("checkbox1").checked !== true){ //Si la checkbox n'est pas coché
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
    modalbg.style.display = "none";
    modalbgTanks.style.display = "block";
    e.preventDefault();
  }

});
