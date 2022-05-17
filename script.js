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
let seconds2 = 2;

setTimeout(myTimer2,6000);

function myTimer2 () {
    const counting2 = setInterval (
        function () {
            timer2.innerHTML = seconds2;
            if (seconds2 === 0) {
                clearInterval(counting2);
                const firstQ = parseInt(prompt("Qual era il primo numero?"));
                const secondQ = parseInt(prompt("Qual era il secondo numero?"));
                const thirdQ = parseInt(prompt("Qual era il terzo numero?"));
                const fourthQ = parseInt(prompt("Qual era il quarto numero?"));
                const fifthQ = parseInt(prompt("Qual era il quinto numero?"));
            } else {
                seconds2--;
            }
        }
    , 1000);
}

// stampare in pagina quanti numeri erano corretti
