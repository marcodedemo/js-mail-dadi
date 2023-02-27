

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




/* ---------------------------------------------------------------------------------- */


/*

    genero due numeri casuali tra 1 e 6 
    confronto i due numeri

    SE
        ° il numero dell'utente è maggiore del numero del computer stampo "hai vinto"

    ALTRIMENTI SE 
        ° il numero dell'utente è minore del numero del computer stampo "hai perso"

    ALTRIMENTI 
        ° se i due numeri sono uguali stampo "parità"
*/






// dichiaro la variabile corrispondente al pulsante che crea un numero random

let rollDices = document.getElementById("random-btn");

// alla pressione del pulsante
rollDices.addEventListener("click", function(){


    // genero due numeri random tra 1 e 6 e li memorizzo
    let userNumber = Math.floor(Math.random()* 6) + 1 ;
    let pcNumber = Math.floor(Math.random()* 6) + 1 ;

    // dichiaro le variabili corrispondenti alle immagini dei dadi per poi potergli cambiare le immagini
    let userDiceEl = document.getElementById("user-dice-img");
    let pcDiceEl = document.getElementById("pc-dice-img");

    // rendo visibili le immagini dei dadi solo dopo la prima generazione randomica
    userDiceEl.style.display = "block";
    pcDiceEl.style.display = "block";

    // attribuisco alla src dell'immagine il valore randomico generato per inserire l'immagine del dado corretto
    userDiceEl.setAttribute("src", "img/" + userNumber + ".png");
    pcDiceEl.setAttribute("src", "img/" + pcNumber + ".png")


    // dichiaro la variabile corrispondente all'elemento html in cui scrivere la frase di vittoria/sconfita
    let resultEl = document.getElementById("win-lose");


    if(userNumber > pcNumber){

        resultEl.innerHTML = "You Win!!";

    } else if (userNumber < pcNumber){

        resultEl.innerHTML = "You Lose!!";

    } else{
        resultEl.innerHTML = "Tie!";

    }

})


