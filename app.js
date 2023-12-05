"use strict";
const domElements = {
    quoteResults: document.getElementById("quoteDisplay"),
    spn: document.getElementById("results")
}
//start with empty str for saved quote
let localStorageSettings = {
    savedQuotes: ""
};
//1st steps to get data
function getData(){
    if (localStorage.settings) {
        console.log("SAVED QUOTE IS:", localStorage.settings);

        // parse our data and update our js variable
        settings = JSON.parse(localStorage.settings)
    }
}
function sendData() {
    // stringify our data
    const stringified = JSON.stringify(settings);

    // send to local storage
    localStorage.settings = stringified;
}

async function logQuotes() {
    const response = await fetch("https://api.quotable.io/random");
    const quotesObj = await response.json();
    const quoted = quotesObj.content + " -" + quotesObj.author;
    console.log(quoted);
    quote.innerHTML = quoted;
    const myQuotes = saveBtnDisplay.addEventListener("click", () => {

        saveResults.innerText = quoted;
       domElements.spn.appendChild(saveResults)
    }
    )
}




let state = {};

// DOM Elements
let quote = document.getElementById("quoteDisplay");
let saveBtnDisplay = document.getElementById("save-btn-display");
let saveResults = document.createElement("p");


// Array to hold saved quotes
const quotes = [];

// get from local storage

const storedQuotes = localStorage.getItem('results');
if (storedQuotes) {
    // parse our JSON from a string back into an object
    const parsedQuotes = JSON.parse(storedQuotes)
    // add all of the items from the parsed into the shoppingCart
    parsedQuotes.forEach(item => quotes.push(item));
}


// set local storage
const stringifiedQuote = JSON.stringify(quotes)
localStorage.setItem('cart', stringifiedQuote)
                      
//const renderQuotes = () => {
   // quotesObj.forEach(item => {
      //  const para = document.createElement('p');
        //para.textContent = item.content;

        //domElements.quoteResults.appendChild(para)

        // attach our click event listener
       // para.addEventListener("click", logQuotesAndAuthor())
    //})

//}   

//renderQuotes();
                                                 

// use DOM manipulation to render saved quotes
const renderSavedQuotes = () =>{
    //reset html
    domElements.spn.innerHTML = '';
    console.log("QUOTE: ", quotes)
}                                               
// our click event to add a saved quote
function handleAddItem(event) {
    event.preventDefault();

    // create a copy of the clicked element
    const newElm = document.createElement("li");
    newElm.textContent = event.target.textContent
   // newElm.addEventListener("click", handleDeleteItem)

    // add to dom
    domElements.spn.appendChild(newElm)

    // find the object inside of our inventory array
    const quotedObj = quotesArray.find(item => {
        return item.content === event.target.textContent
    })
    // update our shoppingCart array
    quotesArray.push(quotedObj)

    // stringify our data
    const stringifyQuote = JSON.stringify(quotes)

    // update to localstorage
    localStorage.setItem('cart', stringifyCart)
};
