let word;
let mistakes = 0;

function enterTheWord() {
    let text = document.getElementById("readTheWord");
    word = text.value;
    let readTheWord = document.getElementById("readTheWord");
    readTheWord.style.display = "none";
    let start = document.getElementById("start");
    start.style.display = "none";
    let inputLetter = document.getElementById("inputLetter");
    inputLetter.style.display = "block";
    let send = document.getElementById("send");
    send.style.display = "block";
    const hangman0 = document.querySelector("#hangman0");
    hangman0.style.display = "block";

    let underlines = document.querySelector("#underlines");
    for (let i = 0; i < word.length; ++i) {
        let createP = document.createElement("p");
        let pText = "_";
        let underline = document.createTextNode(pText);
        createP.appendChild(underline);
        underlines.appendChild(createP);
    }
}

function searchInTheWord() {
    let change = false;
    let wrong = false;
    let inputLetter = document.getElementById("inputLetter");
    let letter = inputLetter.value;
    let paragraphs = Array.from(document.querySelectorAll("p"));
    let n = word.length;

    for (let i = 0; i < n; ++i) {
        if (letter == word[i]) {
            change = true;
        }
        if (change) {
            word[i] = "!";
            paragraphs[i].innerHTML = letter;
            change = false;
            wrong = true;
        }
        if (i == n - 1 && wrong == false) {
            ++mistakes;
            const hangman = document.querySelectorAll("[id^='hangman']");
            hangman[mistakes].style.display = "block";
        }
        if (mistakes === 6) {
            alert("Ai pierdut! Cuvântul era: " + word);
            let send = document.getElementById("send");
            send.disabled = true;
        }
    }
}
