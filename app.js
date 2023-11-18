"use strict";

const quotesArray = [
    {
        content: "All action results from thought, so it is thoughts that matter.",
        author: "Sai Baba",
        tags: ["Famous Quotes"],
        authorSlug: "sai-baba",
        length: 63,
        dateAdded: "2020-02-22",
        dateModified: "2023-04-14",
    },

    {
        content: "Friends are the siblings God never gave us.",
        author: "Mencius",
        tags: ["Friendship"],
        authorSlug: "mencius",
        length: 43,
        dateAdded: "2021-03-26",
        dateModified: "2023-04-14",
    },

    {
        content: "Follow your instincts. That is where true wisdom manifests itself.",
        author: "Oprah Winfrey",
        tags: ["Famous Quotes"],
        authorSlug: "oprah-winfrey",
        length: 66,
        dateAdded: "2020-12-17",
        dateModified: "2023-04-14",
    }
];
let quoteIndex = Math.floor(Math.random() * quotesArray.length);
let quoteContent;
let quoteAuthor;
const saveBtnDisplay = document.getElementById("save-btn-display");
const resultsDisplay = document.getElementById("results");
let userSave;
saveBtnDisplay.addEventListener("click", () => {
    userSave = quoteContent + " -" + quoteAuthor;
    saveBtnDisplay.innerHTML = userSave
})

function resultsFunc(saveBtnDisplay) {
    let log = "";
    if (saveBtnDisplay) {
        resultsDisplay.innerHTML = `${userSave}`
    }
}

function getRandomQuote() {
  
    for (let i = 0; i < quotesArray.length - 2; i++) {
        quoteContent = quotesArray[quoteIndex].content;
        quoteAuthor = quotesArray[quoteIndex].author;
    }
    return quoteContent + " -" + quoteAuthor;
}
function getQuoteAndAuthor() {
    let quote = getRandomQuote();
    console.log(quote.content);
    console.log(quote.author);
}

function logQuotesAndAuthor() {
    let result;
    for (let i = 0; i < quotesArray.length; i++) {
        result = getRandomQuote();
    }

    return result;
}


function renderQuoteContent(event) {

    const sect = document.querySelector("section");
    const quote = document.createElement("p");
    quote.textContent = logQuotesAndAuthor();
    sect.appendChild(quote);
    logQuotesAndAuthor();
}

