

/*

creo un array contenente gli indirizzi email validi
chiedo all'utente di inserire un indirizzo email tramite un input
al click del pulsante submit controllo che l'indirizzo inserito sia presente nell'array
    SE l'indirizzo inserito è presente nell'array
        ° stampo "accesso consentito"
    ALTRIMENTI
        ° stampo "inserisci un indirizzo email valido"


*/


// authorized emails array

let emailsList = ["uno.due@gmail.com", "indirizzo.email@gmail.com", "due.tre@gmail.com", "tre.quattro@gmail.com", "quattro.cinque#gmail.com", "cinque.sei@gmail.com", "sei.sette@gmail.com"];


let emailInputEl = document.getElementById("email-input");

let submitEl = document.getElementById("submit-btn");


// on submit button click 
submitEl.addEventListener("click", function(){
    

    // if(emailsList.find(element => element == emailInputEl.value)){

        //     console.log("Accesso consentito");
        //     document.getElementById("login-message").innerHTML = "Accesso consentito";
        //     document.getElementById("login-message").style.color = "#abff4f";
        //     break;

        // } else {

        //     console.log("Inserisci un indirizzo email valido");
        //     document.getElementById("login-message").innerHTML = "Inserisci un indirizzo email valido";
        //     document.getElementById("login-message").style.color = "#f21b3f";
        //     break;

        // }



    
    for (let i = 0; i < emailsList.length; i++) {
    

        if(emailsList[i] == emailInputEl.value){
           
            console.log("Accesso consentito");
            document.getElementById("login-message").innerHTML = "Accesso consentito";
            document.getElementById("login-message").style.color = "#abff4f";
            break;

        } else {

            console.log("Inserisci un indirizzo email valido");
            document.getElementById("login-message").innerHTML = "Inserisci un indirizzo email valido";
            document.getElementById("login-message").style.color = "#f21b3f";

        }
        
    }

})

