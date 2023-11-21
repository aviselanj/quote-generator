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
let state = {};
let quoteIndex = Math.floor(Math.random() * quotesArray.length);
let quote = document.getElementById("quoteDisplay");
let saveBtnDisplay = document.getElementById("save-btn-display");
let resultsDisplay = document.querySelector("span");
let spn = document.querySelector("span");
let saveResults = document.createElement("p");





function logQuotesAndAuthor() {
    quoteIndex = Math.floor(Math.random() * quotesArray.length);;
    quote.innerHTML = quotesArray[quoteIndex].content + " -" + quotesArray[quoteIndex].author;
}


saveBtnDisplay.addEventListener("click", () => {
    saveResults.innerText = quotesArray[quoteIndex].content + " -" + quotesArray[quoteIndex].author;
    spn.appendChild(saveResults)
})

