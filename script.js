// genero 5 numeri casuali
const div = document.getElementById("mynumbers");
console.log(div);

const numbers = [];
for (let i=0; i<5; i++) {
    let randomNum = Math.floor((Math.random() * 100) + 1);
    numbers.push(randomNum);
}
console.log(numbers);
div.append(numbers);

// timer 6 secondi
const timer1 = document.getElementById("mytimer1");
let seconds1 = 6;

const counting1 = setInterval (
    function () {
        timer1.innerHTML = seconds1;
        if (seconds1 === 0) {
            clearInterval(counting1);
            alert("Tieni a mente i numeri per 30 secondi");
            div.classList.add("display_none");
            timer1.classList.add("display_none");
        } else {
            seconds1--;
        }
    }
, 1000);

// timer 30 secondi
const timer2 = document.getElementById("mytimer2");
let seconds2 = 30;

setTimeout(myTimer2,6000);

const userNums = document.getElementById("userNums");

function myTimer2 () {
    const counting2 = setInterval (
        function () {
            const result = document.getElementById("result");
            timer2.innerHTML = seconds2;
            if (seconds2 === 0) {
                clearInterval(counting2);

                const a2 = [];
                for(i = 0; i < 5; i++) {
                    numberUser = parseInt(prompt("Inserisci un numero."));
                    console.log(numberUser)
                    
                    if (numbers.includes(numberUser)) {
                        a2.push(numberUser);
                    }
                }             
                
                // Ammontare di numeri indovinati
                if(a2.length == 5) {
                    result.append("Hai indovinato tutti i numeri.");
                } else if(a2.length == 1) {
                    result.append("Hai indovinato un numero.");
                } else if(a2.length == 2) {
                    result.append("Hai indovinato due numeri.");
                } else if(a2.length == 3) {
                    result.append("Hai indovinato tre numeri.");
                } else if(a2.length == 4) {
                    result.append("Hai indovinato quattro numeri.");
                } else {
                    result.append("Non hai indovinato nessun numero.");
                }

                console.log(a2);
            } else {
                seconds2--;
            }
        }
    , 1000);
}