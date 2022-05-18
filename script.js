/* Si dichiara 6 variabili globali, per le due funzioni:
3 contatori per risposta esatta, sbagliata e quante domande.
un array contenenti le matricole delle domande e 'numero' che serve la posizione dell'array

la variabile 'ultimaDomanda' serve per capire quando siamo arrivati alla fine del quiz 
*/
var contEsatto = 0;
var contSbagliato = 0;
var domandaArray = [0, 1, 2, 3, 4, 5];
var cont = 0;
var numero;
var ultimaDomanda = 1


//Questa funzione 'question()' rappresentano le domande del quiz
function question() {

    let r1 = document.getElementById('R1');
    let r2 = document.getElementById('R2');
    let r3 = document.getElementById('R3');
    let r4 = document.getElementById('R4');
    let domanda = document.getElementById('domanda');
    let rg1 = document.getElementById('risposta1');
    let rg2 = document.getElementById('risposta2');
    let rg3 = document.getElementById('risposta3');
    let rg4 = document.getElementById('risposta4');
    let ru = document.getElementById('rispostaUtente')

    cont++;// conta la domanda effettuata
    numero = Math.floor(Math.random() * domandaArray.length)// la variabile 'numero' viene assegnato (casualmente) un numero compreso da 0 alla lunghezza dell'array. 
    ru.style.visibility = "hidden"

    r1.style.color = "black";
    r2.style.color = "black";
    r3.style.color = "black";
    r4.style.color = "black";

    rg1.checked = false;
    rg2.checked = false;
    rg3.checked = false;
    rg4.checked = false;

    switch (domandaArray[numero]) { //Avendo generato il numero, si individua la posizione dell'array, che pesca la domanda. Si utilizza uno switch per semplicità
        case 0:
            domanda.innerHTML= 'Qual è la caratteristica più importante del modello computazionale competitivo?'
            r1.innerHTML = "Velocizza la computazione";
            r2.innerHTML = "E' un algoritmo di schedulazione";
            r3.innerHTML = "Condivide le Informazione (come file o directory)";
            r4.innerHTML = "Sono eseguiti all'interno del sistema operativo";
            rg1.type = "radio"
            rg2.type = "radio"
            rg3.type = "radio"
            rg4.type = "radio"

            break;
        case 1:
            domanda.innerHTML = "Cosa s’intende con il termine componente leggera di un processo?"
            r1.innerHTML = "La parte del processo alla quale viene assegnata ala CPU";
            r2.innerHTML = "La parte del processo che possiede le risorse";
            r3.innerHTML = "L'insieme dell'immagine di un processo e le risorse da esso possedute";
            r4.innerHTML = "Presenza di piú programmi in memoria principale";
            rg1.type = "radio"
            rg2.type = "radio"
            rg3.type = "radio"
            rg4.type = "radio"

            break;
        case 2:
            domanda.innerHTML = "Che cosa significa il termine CPU bound?"
            r1.innerHTML = "E' un identificativo numerico univoco";
            r2.innerHTML = "Dipendenti principalmente dalla disponibilità delle risposte di I/O";
            r3.innerHTML = "Dipendenti principalmente dalla disponibilità del processore";
            r4.innerHTML = "Interrompe l’evoluzione di un processo e servirne un altro";
            rg1.type = "radio"
            rg2.type = "radio"
            rg3.type = "radio"
            rg4.type = "radio"
            break;
        case 3:
            domanda.innerHTML = "Quali sono le caratteristiche del Process Table?"
            r1.innerHTML = "E' un identificativo numerico univoco";
            r2.innerHTML = "E' contiene tutti i PCB dei singoli processi";
            r3.innerHTML = "E' sempre a disposizione le informazioni sullo stato del processo";
            r4.innerHTML = "E' un processore che può essere condiviso tra parecchi processi";
            rg1.type = "checkbox"
            rg2.type = "checkbox"
            rg3.type = "checkbox"
            rg4.type = "checkbox"


            break;
        case 4:
            domanda.innerHTML = "Qual è la definizione dello stato di TERMINATED di un processo?"
            r1.innerHTML = "Tutto il codice del processo è stato eseguito";
            r2.innerHTML = "Nei sistemi monoprocessore solo un processo può essere in questo stato";
            r3.innerHTML = "il codice del programma è letto dal disco, è caricato in RAM e ne diventa il processo";
            r4.innerHTML = "Il processo ha terminato l’esecuzione";
            rg1.type = "checkbox"
            rg2.type = "checkbox"
            rg3.type = "checkbox"
            rg4.type = "checkbox"


            break;
        case 5:
            domanda.innerHTML = "Che cosa s’intende con il termine deadlock?"
            r1.innerHTML = "Esegue solo i processi con priorità alta ";
            r2.innerHTML = " Ogni processo è in attesa di un evento che solo un altro processo provocare";
            r3.innerHTML = "un altro processo è in attesa di I/0";
            r4.innerHTML = "Quando è in stato di Terminated";
            rg1.type = "radio"
            rg2.type = "radio"
            rg3.type = "radio"
            rg4.type = "radio"

            break;

    }
    document.getElementById('button').style.visibility = 'visible'
    document.getElementById('button2').style.visibility = 'hidden'

    if (ultimaDomanda == domandaArray.length) { // Questa condizione mi serve per cambiare il valore del bottone
        document.getElementById('button').value = 'TERMINA'
        switch (domandaArray[numero]) {
            case 0:
                domanda.innerHTML = 'Qual è la caratteristica più importante del modello computazionale competitivo?'
                r1.innerHTML = "Velocizza la computazione";
                r2.innerHTML = "E' un algoritmo di schedulazione";
                r3.innerHTML = "Condivide le Informazione (come file o directory)";
                r4.innerHTML = "Sono eseguiti all'interno del sistema operativo";
                rg1.type = "radio"
                rg2.type = "radio"
                rg3.type = "radio"
                rg4.type = "radio"

                break;
            case 1:
                domanda.innerHTML = "Cosa s’intende con il termine componente leggera di un processo?"
                r1.innerHTML = "La parte del processo alla quale viene assegnata ala CPU";
                r2.innerHTML = "La parte del processo che possiede le risorse";
                r3.innerHTML = "L'insieme dell'immagine di un processo e le risorse da esso possedute";
                r4.innerHTML = "Presenza di piú programmi in memoria principale";
                rg1.type = "radio"
                rg2.type = "radio"
                rg3.type = "radio"
                rg4.type = "radio"

                break;
            case 2:
                domanda.innerHTML = "Che cosa significa il termine CPU bound?"
                r1.innerHTML = "E' un identificativo numerico univoco";
                r2.innerHTML = "Dipendenti principalmente dalla disponibilità delle risposrse di I/O";
                r3.innerHTML = "Dipendenti principalmente dalla disponibilità del processore";
                r4.innerHTML = "Interrompe l’evoluzione di un processo e servirne un altro";
                rg1.type = "radio"
                rg2.type = "radio"
                rg3.type = "radio"
                rg4.type = "radio"


                break;
            case 3:
                domanda.innerHTML = "Quali sono le caratteristiche del Process Table? (solo 2 risposte)"
                r1.innerHTML = "E' un identificativo numerico univoco";
                r2.innerHTML = "E' contiene tutti i PCB dei singoli processi";
                r3.innerHTML = "E' sempre a disposizione le informazioni sullo stato del processo";
                r4.innerHTML = "E' un processore che può essere condiviso tra parecchi processi";
                rg1.type = "checkbox"
                rg2.type = "checkbox"
                rg3.type = "checkbox"
                rg4.type = "checkbox"


                break;
            case 4:
                domanda.innerHTML = "Qual è la definizione dello stato di TERMINATED di un processo? (solo 2 risposte)";
                r1.innerHTML = "Tutto il codice del processo è stato eseguito";
                r2.innerHTML = "Nei sistemi monoprocessore solo un processo può essere in questo stato";
                r3.innerHTML = "il codice del programma è letto dal disco, è caricato in RAM e ne diventa il processo";
                r4.innerHTML = "Il processo ha terminato l’esecuzione";
                rg1.type = "checkbox"
                rg2.type = "checkbox"
                rg3.type = "checkbox"
                rg4.type = "checkbox"


                break;
            case 5:
                domanda.innerHTML = "Che cosa s’intende con il termine deadlock?"
                r1.innerHTML = "Esegue solo i processi con priorità alta ";
                r2.innerHTML = " Ogni processo è in attesa di un evento che solo un altro processo provocare";
                r3.innerHTML = "un altro processo è in attesa di I/0";
                r4.innerHTML = "Quando è in stato di Terminated";
                rg1.type = "radio"
                rg2.type = "radio"
                rg3.type = "radio"
                rg4.type = "radio"

                break;
        }
        
    }
    document.getElementById('button2').style.visibility = 'hidden'
}

/* La funzione 'conferma()' serve per confermare la risposta data dall'utente. Se la risposta è giusta, incrementa la variabile 'contEsatto', altrimenti incrementa 'contSbagliato'.
    Ogni risposta confermata, viene eliminato dall'array con il metodo "splice(pos, quanti numeri da eliminare)", impedendo che ci sia ripetizioni della domanda. 
    Viene inviduato se la risposta è giusta o sbagliata con i colori corrispondenti Verde e Rosso
*/
function conferma() {

    let rg1 = document.getElementById('risposta1');
    let rg2 = document.getElementById('risposta2');
    let rg3 = document.getElementById('risposta3');
    let rg4 = document.getElementById('risposta4');
    let ru = document.getElementById('rispostaUtente')
    let r1 = document.getElementById('R1');
    let r2 = document.getElementById('R2');
    let r3 = document.getElementById('R3');
    let r4 = document.getElementById('R4');

    ru.style.visibility = "visible";

    if (ultimaDomanda == domandaArray.length) {// Anche qui usiamo la condizione per il resoconto del quiz effettuato dall'utente.
        switch (domandaArray[numero]) {
            case 0:
                if (rg4.checked) {
                    contEsatto++
                    domandaArray.splice(numero, 1)
                }
                else {
                    contSbagliato++
                    domandaArray.splice(numero, 1)
                    ru.innerHTML = "Sono a tutti gli effetti dei processi, che sono sia monolitico sia cooperanti "
                }
                r4.style.color = "green";
                r1.style.color = "red";
                r2.style.color = "red";
                r3.style.color = "red";
                break;
            case 1:
                if (rg1.checked) {
                    contEsatto++
                    domandaArray.splice(numero, 1)

                }
                else {
                    contSbagliato++
                    domandaArray.splice(numero, 1)
                    ru.innerHTML = "E' detto anche THREAD, che è un segmento di codice (tipicamente una funzione) che viene eseguito in modo sequenziale all’interno di un processo pesante"
                }
                r1.style.color = "green";
                r4.style.color = "red";
                r2.style.color = "red";
                r3.style.color = "red";
                break;
            case 2:
                if (rg3.checked) {
                    contEsatto++
                    domandaArray.splice(numero, 1)                    
                }
                else {
                    contSbagliato++
                    domandaArray.splice(numero, 1)
                    ru.innerHTML = "L’esecuzione di processi CPU-BOUND ha come conseguenza un progressivo ritardo nell’esecuzione degli altri processi"
                }
                r1.style.color = "red";
                r2.style.color = "red";
                r3.style.color = "green";
                r4.style.color = "red";
                break;
            case 3:
                if (rg2.checked && rg3.checked) {
                    contEsatto++
                    domandaArray.splice(numero, 1)
                }
                else {
                    contSbagliato++
                    domandaArray.splice(numero, 1)
                    ru.innerHTML = "In questo modo il SO ha sempre a disposizione le informazioni sullo stato del processo"
                }
                r2.style.color = "green";
                r3.style.color = "green";
                r1.style.color = "red";
                r4.style.color = "red";
                break;
            case 4:
                if (rg1.checked && rg4.checked) {
                    contEsatto++
                    domandaArray.splice(numero, 1)
                }
                else {
                    contSbagliato++
                    domandaArray.splice(numero, 1)
                    ru.innerHTML = "Lo dice anche la parola TERMINATED - FINE. E' la chiusura del processo"
               }
                r4.style.color = "green";
                r1.style.color = "green";
                r2.style.color = "red";
                r3.style.color = "red";
                break;
            case 5:
                if (rg2.checked) {
                    contEsatto++
                    domandaArray.splice(numero, 1)
                    
                }
                else {
                    contSbagliato++
                    domandaArray.splice(numero, 1)
                    ru.innerHTML = "Infatti quest' evento è il rilascio di una risorsa"
                }
                r2.style.color = "green";
                r1.style.color = "red";
                r4.style.color = "red";
                r3.style.color = "red";
                break;
                
                
        }
        document.getElementById('formDomanda').style.visibility = 'hidden'
        document.getElementById('button').style.visibility = 'hidden'
        document.getElementById('domanda').innerHTML = "HAI FINITO. <br> Ci sono state "+cont+" domande tra cui:<br> - "+contEsatto+" risposte corrette <br> - "+contSbagliato+ " risposte sbagliate" ;
    }
    else{
        switch (domandaArray[numero]) {
            case 0:
                if (rg4.checked) {
                    contEsatto++
                    domandaArray.splice(numero, 1)
                }
                else {
                    contSbagliato++
                    domandaArray.splice(numero, 1)
                    ru.innerHTML = "Sono a tutti gli effetti dei processi, che sono sia monolitico sia cooperanti "
                }
                r4.style.color = "green";
                r1.style.color = "red";
                r2.style.color = "red";
                r3.style.color = "red";
                break;
            case 1:
                if (rg1.checked) {
                    contEsatto++
                    domandaArray.splice(numero, 1)

                }
                else {
                    contSbagliato++
                    domandaArray.splice(numero, 1)
                    ru.innerHTML = "E' detto anche THREAD, che è un segmento di codice (tipicamente una funzione) che viene eseguito in modo sequenziale all’interno di un processo pesante"
                }
                r1.style.color = "green";
                r4.style.color = "red";
                r2.style.color = "red";
                r3.style.color = "red";
                break;
            case 2:
                if (rg3.checked) {
                    contEsatto++
                    domandaArray.splice(numero, 1)                    
                }
                else {
                    contSbagliato++
                    domandaArray.splice(numero, 1)
                    ru.innerHTML = "L’esecuzione di processi CPU-BOUND ha come conseguenza un progressivo ritardo nell’esecuzione degli altri processi"
                }
                r1.style.color = "red";
                r2.style.color = "red";
                r3.style.color = "green";
                r4.style.color = "red";
                break;
            case 3:
                if (rg2.checked && rg3.checked) {
                    contEsatto++
                    domandaArray.splice(numero, 1)
                }
                else {
                    contSbagliato++
                    domandaArray.splice(numero, 1)
                    ru.innerHTML = "In questo modo il SO ha sempre a disposizione le informazioni sullo stato del processo"
                }
                r2.style.color = "green";
                r3.style.color = "green";
                r1.style.color = "red";
                r4.style.color = "red";
                break;
            case 4:
                if (rg1.checked && rg4.checked) {
                    contEsatto++
                    domandaArray.splice(numero, 1)
                }
                else {
                    contSbagliato++
                    domandaArray.splice(numero, 1)
                    ru.innerHTML = "Lo dice anche la parola TERMINATED - FINE. E' la chiusura del processo"
               }
                r4.style.color = "green";
                r1.style.color = "green";
                r2.style.color = "red";
                r3.style.color = "red";
                break;
            case 5:
                if (rg2.checked) {
                    contEsatto++
                    domandaArray.splice(numero, 1)
                    
                }
                else {
                    contSbagliato++
                    domandaArray.splice(numero, 1)
                    ru.innerHTML = "Infatti quest' evento è il rilascio di una risorsa"
                }
                r2.style.color = "green";
                r1.style.color = "red";
                r4.style.color = "red";
                r3.style.color = "red";
                break;
                
        }
        document.getElementById('button').style.visibility = 'hidden'
        document.getElementById('button2').style.visibility = 'visible'
    }

}