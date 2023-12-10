"use strict";
const domElements = {
    quoteResults: document.getElementById("quoteDisplay"),
    spn: document.getElementById("results")
}
const saveBtn = document.getElementById("save-btn-display");



const logQuotes = async function () {
    let response = await fetch("https://api.quotable.io/random");
    let quotesObj = await response.json();
    let quoted = quotesObj.content + " -" + quotesObj.author;
    console.log(quoted);
    domElements.quoteResults.innerHTML = quoted;

}
let savedQuoteArr = [];
let result;
function saveQuotes() {
    if (logQuotes) {
       savedQuoteArr.push(domElements.quoteResults.innerHTML);
    }
    savedQuoteArr.forEach((item) => {
        let li =
            document.createElement("li");
        li.innerText = item;
        domElements.spn.appendChild(li);
    });
   

}


