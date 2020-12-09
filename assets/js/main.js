/* JSnacks Blocco 1
********************/

/*
JSnack 1
L’utente inserisce due numeri in successione, con due
prompt. Il software stampa il maggiore.
*/

/*
{
    let n1 = Number(prompt("inserisci primo numero"));
    let n2 = Number(prompt("inserisci secondo numero"));

    const numeroMaggiore = (numero1, numero2) =>{
        if (numero1 > numero2) {
            console.log(`il primo numero è il maggiore ${numero1}`);
        } else {
            console.log(`il secondo numero è il maggiore ${numero2}`);
        }
    }

    numeroMaggiore(n1,n2);
}
*/

/*
JSnack 2
L’utente inserisce due parole in successione, con due
prompt. Il software stampa prima la parola più corta, poi la
parola più lunga.
*/

/*
{
    let p1 = prompt("inserisci prima parola");
    let p2 = prompt("inserisci prima parola");

    const parole = (parola1, parola2) => {
        if (parola1.length === parola2.length) {
            console.log(`le parole hanno la stessa lunghezza ${parola1} ${parola2}`);
        } else if (parola1.length < parola2.length) {
            console.log(`prima parola più corta ${parola1} ${parola2}`);
            
        } else {
            console.log(`seconda parola più corta ${parola2} ${parola1}`);
        }
    }
    parole(p1,p2);
}
*/

/*
JSnack 3
Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.
*/

/*
{
    let sommaFor = 0;

    for (let i = 0; i < 5; i++) {
        let numero = Number(prompt("inserisci numero"));
        sommaFor += numero;
    }
    console.log(sommaFor);

    let sommaWhile = 0;
    let i = 0;
    while (i < 5) {
        let numero = Number(prompt("inserisci numero"));
        sommaWhile += numero;
        i++;
    }
    console.log(sommaWhile);
}
*/

/*
JSnack 4
In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa.
*/

/*
{
    let nomiPartecipanti = ["pippo", "tore", "franco", "peppe", "lino"];
    let nomeUtente = prompt("inserisci il tuo nome");
    let forse = false;

    for (let i = 0; i < nomiPartecipanti.length; i++) {
        if (nomiPartecipanti[i] === nomeUtente) {
            forse = true;
        }
    }

    if (forse === false) {
    console.log("Non puoi partecipare");
    } else {
        console.log("Puoi partecipare");
    }
}
*/

/*
JSnack 5
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.
*/

/*
{
    let arrayNumeri = [];
    for (let i = 0; i < 6; i++) {

        let number = Number(prompt("inserisci numero"));

        if (number % 2 === 1) {
            arrayNumeri.push(number);
        }
        
    }
    console.log(arrayNumeri);
}
*/

/*
JSnack 6
Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente.
*/

/*
{
    let number = Number(prompt("inserisci numero"));
    for (let i = 1; i <= number; i++) {
    let cubo = Math.pow(i,3);
    console.log(cubo);
    }
}
*/

/*
JSnack 7
Stampa le potenze di 2 fino a 1000.
*/

/*
{
    let number = 2;
    for (let i = 0; i <= 1000; i++) {
        console.log(Math.pow(number, i));
    }
}
*/

/*
JSnack 8
Chiedi un numero di 4 cifre all’utente e calcola la somma
di tutte le cifre che compongono il numero.
*/

/*
{
    let number = prompt("inserisci numero di 4 cifre");
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    console.log(sum);
}
*/

/*
JSnack 9
Calcola la somma e la media dei primi 10 numeri.
*/

/*
{
    let sum = 0;
    let media = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    media = sum / 10;
    console.log(sum, media);
}
*/


/* JSnacks Blocco 2
********************/

/*
JSnack 1
Inserisci un numero, se è pari stampa il numero, se è dispari
stampa il numero successivo
*/

/*
{
    let number = Number(prompt("inserisci numero"));
    const numeroPariDispari = numero => {
        if (numero % 2 === 0) {
            console.log(numero);
        } else {
            console.log(`${numero + 1}`);
        }
    }
    numeroPariDispari(number);
}
*/

/*
JSnack 2
Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di invitati.
*/

/*
{
    let nomi = ["Pino", "Lorenzo", "Alfredo", "Franco", "Andrea", "Salvatore", "Angela", "William", "Nicola", "Diego", "Fabio"];
    let cognomi = ["Saponaro", "Iglio", "Rizzi", "Gaggia", "Internicola", "Lozano", "Gallo", "Mazza", "Rossi", "Scarpati", "Pacifici"];
    const listaCasuale = (listaNomi, listaCognomi) => {
        let nomiCognomi = [];
        for (let i = 0; i < listaNomi.length; i++) {
        let x = Math.floor( Math.random() * listaNomi.length );
        let y = Math.floor( Math.random() * listaCognomi.length );
        nomiCognomi[i] = listaNomi[x] + " " + listaCognomi[y];
        }
        return nomiCognomi;
    }
    console.log(listaCasuale(nomi, cognomi));
}
*/

/*
JSnack 3
Crea un array di numeri interi e fai la somma di tutti gli
elementi che sono in posizione dispari
*/

/*
{
    let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let somma = 0;
    for (let i = 0; i < numeri.length; i++) {
        if (numeri[i] % 2 === 1) {
            somma += numeri[i];
        }
    }
    console.log(somma);
}
*/


/*
JSnack 4
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

/*
{
    let array1 = [1, 5, 6, 8, 74, 56, 65, 15];
    let array2 = [15, 67, 564, 342, 54, 98, 45, 1, 5, 6, 8, 74, 56, 65, 15];
    const arrayLunghezzaUguale = (arrayOne, arrayTwo) =>{
        if (arrayOne.length > arrayTwo.length) {
            while (arrayOne.length > arrayTwo.length) {
                let number = Math.ceil(Math.random() * 100);
                arrayTwo.push(number);
            }
        } else if (arrayOne.length < arrayTwo.length){
            while (arrayOne.length < arrayTwo.length) {
                let number = Math.ceil(Math.random() * 100);
                arrayOne.push(number);
            }
        }
        console.log(arrayOne);
        console.log(arrayTwo);
    }
    console.log(arrayLunghezzaUguale(array1, array2));
}
*/


/*
JSnack 5
Scrivi una funzione per stabilire se un numero è primo.
Chiedi un numero all’utente e utilizza la funzione per
comunicargli se il numero inserito è primo oppure no.
*/

/*
{
    let numeroUtente = Number(prompt("inserisci numero"));

    const numberPrime = number => {

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            } 
        }
        return number >=2;

    }

    let ris = numberPrime(numeroUtente);
    if (ris) {
        console.log("numero primo");
    } else {
        console.log("numero non primo");
    }

}
*/

/*
JSnacks Blocco 4
*****************/

/*
JSnack 1A
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/

/*
{
    let palla = {
        nome: "palla",
        peso: 10
    };
    console.log(palla);

    
    //JSnack 1B
    //Attraverso un prompt dare la possibilità all’utente di
    //modificare il peso della palla.

    palla.peso = Number(prompt("cambia peso palla"));
    console.log(palla);
}
*/

/*
JSnack 2
Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

/*
{
    let arrayBici = [
    {
        nome: "MontainBike",
        peso: 15
    },
    {
        nome: "BMX",
        peso: 12
    },
    {
        nome: "Graziella",
        peso: 17
    },
    {
        nome: "Tandem",
        peso: 24
    }
    ];
    console.log(arrayBici);
    let iPeso = 0;
    for (let i = 1; i < arrayBici.length; i++) {
        if (arrayBici[iPeso].peso > arrayBici[i].peso) {
            iPeso = i;
        }
    }
    console.log(arrayBici[iPeso]);
}
*/


/*
JSnack 3
Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
*/

/*
{
    let triangoloRettangolo = {
        catetoBase: 48,
        catetoAltezza: 36
    };
    let area = (triangoloRettangolo.catetoBase * triangoloRettangolo.catetoAltezza) / 2;
    console.log(area);
    let ipotenusa = Math.sqrt(Math.pow(triangoloRettangolo.catetoBase,2) + Math.pow(triangoloRettangolo.catetoAltezza,2));
    console.log(ipotenusa);
    perimetro = triangoloRettangolo.catetoBase + triangoloRettangolo.catetoAltezza + ipotenusa;
    console.log(perimetro);
    triangoloRettangolo.ipotenusa = ipotenusa;
    triangoloRettangolo.perimetro = perimetro;
    triangoloRettangolo.area = area;
    console.log(triangoloRettangolo);
}
*/

/*
JSnack 4A
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre
saranno tutte settate a 0.
*/

/*
{
    let squadre = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Cagliari",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Benevento",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Spezia",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Sassuolo",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    }
    ];

    // JSnack 4B
    // Generare numeri random al posto degli 0 nelle proprietà:
    // punti fatti e falli subiti

    squadre.forEach(element => {
        element.puntiFatti = Math.ceil(Math.random() * 10);
        element.falliSubiti = Math.ceil(Math.random() * 10);
    });
    console.log(squadre);

}
*/


/* JSnacks Blocco 5
********************/

/*
JSnack 1
Crea 10 oggetti che rappresentano una zucchina,
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/