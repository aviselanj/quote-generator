"use strict";
const domElements = {
    quoteResults: document.getElementById("quoteDisplay"),
    spn: document.getElementById("results")
}
const saveBtn = document.getElementById("save-btn-display");
const state = {};
// array to store quotes
let savedQuoteArr = [];
// JSON data
const logQuotes = async function () {
    let response = await fetch("https://api.quotable.io/random");
    let quotesObj = await response.json();
    let quoted = quotesObj.content + " -" + quotesObj.author;
    console.log(quoted);
    domElements.quoteResults.innerHTML = quoted;
}
// stringify quotes
const strigifyQuote = JSON.stringify(savedQuoteArr);
// Users action
// set local storage
let result;
const saveQuotes = function (event) {
    event.preventDefault();
    if (logQuotes) {
        savedQuoteArr.push(domElements.quoteResults.innerHTML);
    
    savedQuoteArr.forEach((item) => {
        // stringify quotes
        const strigifyQuote = JSON.stringify(savedQuoteArr);
        // update to local storage
        localStorage.setItem("quotes", strigifyQuote);
        let li =
            document.createElement("li");
        li.innerText = item;
        result = domElements.spn.appendChild(li);
       
    });
    return savedQuoteArr.pop()
}
}
saveBtn.addEventListener("click", saveQuotes);

// get from local storage
const storedQuote = localStorage.getItem("quotes");

    if (storedQuote) {
        // parse our JSON from a string back into an object
        const parsedQuote = JSON.parse(storedQuote)
        // add all of the items from the parsedCart into the shoppingCart
        parsedQuote.forEach(item => savedQuoteArr.push(item));
        
    }


console.log(storedQuote)










