"use strict";
const domElements = {
    spn: document.querySelector("span"),
    saveResults: document.createElement("p")
}

const quotesArray = [{
    "_id": "BTR1osiyS1M5",
    "content": "The best way to predict your future is to create it.",
    "author": "Peter Drucker",
    "tags": ["Future", "Inspirational"],
    "authorSlug": "peter-drucker",
    "length": 52,
    "dateAdded": "2019-10-18",
    "dateModified": "2023-04-14"
}, {
    "_id": "8TXdurkixxgm",
    "content": "Ask yourself the secret of your success. Listen to your answer and practice it.",
    "author": "Richard Bach",
    "tags": ["Success"],
    "authorSlug": "richard-bach",
    "length": 79,
    "dateAdded": "2020-03-01",
    "dateModified": "2023-04-14"
}, {
    "_id": "f_zXwTzHQNBN",
    "content": "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
    "author": "Bruce Lee",
    "tags": ["Famous Quotes"],
    "authorSlug": "bruce-lee",
    "length": 115,
    "dateAdded": "2020-10-14",
    "dateModified": "2023-04-14"
}, {
    "_id": "CDRr80kEq75j",
    "content": "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
    "author": "Chuck Swindoll",
    "tags": ["Famous Quotes"],
    "authorSlug": "chuck-swindoll",
    "length": 101,
    "dateAdded": "2020-01-26",
    "dateModified": "2023-04-14"
}, {
    "_id": "eobAW2Ou0",
    "content": "You win the victory when you yield to friends.",
    "author": "Sophocles",
    "tags": ["Friendship"],
    "authorSlug": "sophocles",
    "length": 46,
    "dateAdded": "2021-03-26",
    "dateModified": "2023-04-14"
}, {
    "_id": "k0LZmoX2xWU",
    "content": "The best way out is always through.",
    "author": "Robert Frost",
    "tags": ["Famous Quotes"],
    "authorSlug": "robert-frost",
    "length": 35,
    "dateAdded": "2021-03-08",
    "dateModified": "2023-04-14"
}, {
    "_id": "27YFtyxa8nBj",
    "content": "Meaning is not what you start with but what you end up with.",
    "author": "Peter Elbow",
    "tags": ["Famous Quotes"],
    "authorSlug": "peter-elbow",
    "length": 60,
    "dateAdded": "2019-08-08",
    "dateModified": "2023-04-14"
}, {
    "_id": "3nOC8XtYwJHl",
    "content": "Not all those who wander are lost.",
    "author": "J. R. R. Tolkien",
    "tags": ["Famous Quotes"],
    "authorSlug": "j-r-r-tolkien",
    "length": 34,
    "dateAdded": "2019-12-23",
    "dateModified": "2023-04-14"
}, {
    "_id": "2i4ILvPHXsgJ",
    "content": "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
    "author": "Michael Jordan",
    "tags": ["Change", "Wisdom"],
    "authorSlug": "michael-jordan",
    "length": 107,
    "dateAdded": "2019-08-16",
    "dateModified": "2023-04-14"
}, {
    "_id": "uV8RyeIRf",
    "author": "Aesop",
    "content": "Better be wise by the misfortunes of others than by your own.",
    "tags": ["Wisdom", "Philosophy"],
    "authorSlug": "aesop",
    "length": 61,
    "dateAdded": "2023-04-03",
    "dateModified": "2023-04-14"
}, {
    "_id": "mVZ3mhSDcX15",
    "content": "Today you are you! That is truer than true! There is no one alive who is you-er than you!",
    "author": "Dr. Seuss",
    "tags": ["Famous Quotes"],
    "authorSlug": "dr-seuss",
    "length": 89,
    "dateAdded": "2020-06-24",
    "dateModified": "2023-04-14"
}, {
    "_id": "oExWZWaD3aPW",
    "content": "To choose what is difficult all one's days, as if it were easy, that is faith.",
    "author": "W. H. Auden",
    "tags": ["Famous Quotes"],
    "authorSlug": "w-h-auden",
    "length": 78,
    "dateAdded": "2019-11-26",
    "dateModified": "2023-04-14"
}, {
    "_id": "yVlVhbeycw3",
    "author": "Aristotle Onassis",
    "content": "The secret of business is to know something that nobody else knows.",
    "tags": ["Business"],
    "authorSlug": "aristotle-onassis",
    "length": 67,
    "dateAdded": "2022-07-06",
    "dateModified": "2023-04-14"
}, {
    "_id": "4eekGH2qL80L",
    "content": "He who lives in harmony with himself lives in harmony with the world.",
    "author": "Marcus Aurelius",
    "tags": ["Famous Quotes"],
    "authorSlug": "marcus-aurelius",
    "length": 69,
    "dateAdded": "2020-07-10",
    "dateModified": "2023-04-14"
}, {
    "_id": "J1amO36TwbX8",
    "content": "You can't blame gravity for falling in love.",
    "author": "Albert Einstein",
    "tags": ["Famous Quotes", "Humorous"],
    "authorSlug": "albert-einstein",
    "length": 44,
    "dateAdded": "2021-05-12",
    "dateModified": "2023-04-14"
}, {
    "_id": "45fWy9g9iDjo",
    "content": "To be beautiful means to be yourself. You don't need to be accepted by others. You need to accept yourself.",
    "author": "Thích Nhất Hạnh",
    "tags": ["Famous Quotes"],
    "authorSlug": "thich-nhat-hanh",
    "length": 107,
    "dateAdded": "2020-12-08",
    "dateModified": "2023-04-14"
}, {
    "_id": "qx0gYyFteZUo",
    "content": "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception; it is a prevailing attitude.",
    "author": "Colin Powell",
    "tags": ["Famous Quotes"],
    "authorSlug": "colin-powell",
    "length": 155,
    "dateAdded": "2019-04-05",
    "dateModified": "2023-04-14"
}, {
    "_id": "NiF_deuEUrS",
    "content": "People usually compare the computer to the head of the human being. I would say that hardware is the bone of the head, the skull. The semiconductor is the brain within the head. The software is the wisdom. And data is the knowledge.",
    "author": "Masayoshi Son",
    "tags": ["Wisdom"],
    "authorSlug": "masayoshi-son",
    "length": 232,
    "dateAdded": "2019-03-15",
    "dateModified": "2023-04-14"
}, {
    "_id": "cz9a9Ioqgp0Z",
    "content": "There are people who have money and people who are rich.",
    "author": "Coco Chanel",
    "tags": ["Famous Quotes"],
    "authorSlug": "coco-chanel",
    "length": 56,
    "dateAdded": "2020-01-12",
    "dateModified": "2023-04-14"
}, {
    "_id": "YeJpbyaNMs",
    "author": "The Buddha",
    "content": "Meditate … do not delay, lest you later regret it.",
    "tags": ["Wisdom", "Motivational"],
    "authorSlug": "the-buddha",
    "length": 50,
    "dateAdded": "2023-03-30",
    "dateModified": "2023-04-14"
}, {
    "_id": "9pQeVJgxcsKT",
    "content": "I am always doing that which I cannot do, in order that I may learn how to do it.",
    "author": "Pablo Picasso",
    "tags": ["Famous Quotes"],
    "authorSlug": "pablo-picasso",
    "length": 81,
    "dateAdded": "2019-12-13",
    "dateModified": "2023-04-14"
}, {
    "_id": "HHqa6LTGObSq",
    "content": "Life is like riding a bicycle. To keep your balance you must keep moving.",
    "author": "Albert Einstein",
    "tags": ["Famous Quotes", "Life"],
    "authorSlug": "albert-einstein",
    "length": 73,
    "dateAdded": "2021-02-12",
    "dateModified": "2023-04-14"
}, {
    "_id": "X6UDrdk4ZIk",
    "content": "Pure, holy simplicity confounds all the wisdom of this world and the wisdom of the flesh.",
    "author": "Francis of Assisi",
    "tags": ["Wisdom"],
    "authorSlug": "francis-of-assisi",
    "length": 89,
    "dateAdded": "2020-03-11",
    "dateModified": "2023-04-14"
}, {
    "_id": "sXDz-2N4-nnJ",
    "content": "An invasion of armies can be resisted, but not an idea whose time has come.",
    "author": "Victor Hugo",
    "tags": ["Famous Quotes"],
    "authorSlug": "victor-hugo",
    "length": 75,
    "dateAdded": "2020-02-22",
    "dateModified": "2023-04-14"
}, {
    "_id": "K_5qMVYUQCFa",
    "content": "Nothing is softer or more flexible than water, yet nothing can resist it.",
    "author": "Laozi",
    "tags": ["Wisdom"],
    "authorSlug": "laozi",
    "length": 73,
    "dateAdded": "2019-10-03",
    "dateModified": "2023-04-14"
}, {
    "_id": "eWtR9nXnZ",
    "content": "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    "author": "Laozi",
    "tags": ["Inspirational"],
    "authorSlug": "laozi",
    "length": 150,
    "dateAdded": "2020-09-09",
    "dateModified": "2023-04-14"
}, {
    "_id": "ZWsrdScwbDP",
    "content": "Good luck is another name for tenacity of purpose.",
    "author": "Ralph Waldo Emerson",
    "tags": ["Famous Quotes"],
    "authorSlug": "ralph-waldo-emerson",
    "length": 50,
    "dateAdded": "2020-08-27",
    "dateModified": "2023-04-14"
}, {
    "_id": "1q5znXik9aXV",
    "content": "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
    "author": "Marian Wright Edelman",
    "tags": ["Famous Quotes"],
    "authorSlug": "marian-wright-edelman",
    "length": 94,
    "dateAdded": "2019-08-03",
    "dateModified": "2023-04-14"
}, {
    "_id": "_tNDPuX5N3v5",
    "content": "Waste no more time arguing about what a good man should be. Be one.",
    "author": "Marcus Aurelius",
    "tags": ["Famous Quotes"],
    "authorSlug": "marcus-aurelius",
    "length": 67,
    "dateAdded": "2019-02-17",
    "dateModified": "2023-04-14"
}, {
    "_id": "LBG_RasdBg_",
    "content": "No party has a monopoly on wisdom. No democracy works without compromise.",
    "author": "Barack Obama",
    "tags": ["Wisdom"],
    "authorSlug": "barack-obama",
    "length": 73,
    "dateAdded": "2021-01-11",
    "dateModified": "2023-04-14"
}, {
    "_id": "QfZTfPVGLvrA",
    "content": "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
    "author": "John Dewey",
    "tags": ["Famous Quotes"],
    "authorSlug": "john-dewey",
    "length": 180,
    "dateAdded": "2020-12-17",
    "dateModified": "2023-04-14"
}, {
    "_id": "A1JTIXKBd-S",
    "content": "The only real valuable thing is intuition.",
    "author": "Albert Einstein",
    "tags": ["Wisdom"],
    "authorSlug": "albert-einstein",
    "length": 42,
    "dateAdded": "2019-09-13",
    "dateModified": "2023-04-14"
}, {
    "_id": "py0SqUMHGW9",
    "author": "Howard H. Aiken",
    "content": "Don't worry about people stealing your ideas. If your ideas are any good, you'll have to ram them down people's throats.",
    "tags": ["Business"],
    "authorSlug": "howard-h-aiken",
    "length": 120,
    "dateAdded": "2022-07-06",
    "dateModified": "2023-04-14"
}, {
    "_id": "ldPGIu-fmv2e",
    "content": "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
    "author": "Lou Holtz",
    "tags": ["Success"],
    "authorSlug": "lou-holtz",
    "length": 93,
    "dateAdded": "2019-02-13",
    "dateModified": "2023-04-14"
}, {
    "_id": "fhyB06UQ9hjL",
    "content": "If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you.",
    "author": "A. A. Milne",
    "tags": ["Famous Quotes", "Love"],
    "authorSlug": "a-a-milne",
    "length": 111,
    "dateAdded": "2019-06-27",
    "dateModified": "2023-04-14"
}, {
    "_id": "EhPdlmjZ9ON",
    "content": "Intuition will tell the thinking mind where to look next.",
    "author": "Jonas Salk",
    "tags": ["Famous Quotes"],
    "authorSlug": "jonas-salk",
    "length": 57,
    "dateAdded": "2019-06-27",
    "dateModified": "2023-04-14"
}, {
    "_id": "GJxkg5rxv0tw",
    "content": "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.",
    "author": "Jean-Paul Sartre",
    "tags": ["Famous Quotes"],
    "authorSlug": "jean-paul-sartre",
    "length": 110,
    "dateAdded": "2020-03-15",
    "dateModified": "2023-04-14"
}, {
    "_id": "ZRQcBg6E7j",
    "content": "A real friend is one who walks in when the rest of the world walks out.",
    "author": "Walter Winchell",
    "tags": ["Friendship"],
    "authorSlug": "walter-winchell",
    "length": 71,
    "dateAdded": "2020-03-11",
    "dateModified": "2023-04-14"
}, {
    "_id": "JZm3q3illA",
    "author": "Winston Churchill",
    "content": "All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.",
    "tags": ["Social Justice", "Freedom", "History"],
    "authorSlug": "winston-churchill",
    "length": 120,
    "dateAdded": "2022-03-12",
    "dateModified": "2023-04-14"
}, {
    "_id": "S9gvh8-zNo0A",
    "content": "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
    "author": "John Steinbeck",
    "tags": ["Famous Quotes"],
    "authorSlug": "john-steinbeck",
    "length": 99,
    "dateAdded": "2019-12-23",
    "dateModified": "2023-04-14"
}, {
    "_id": "mvAZepcjue",
    "content": "Start with what is right rather than what is acceptable.",
    "author": "Franz Kafka",
    "tags": ["Wisdom"],
    "authorSlug": "franz-kafka",
    "length": 56,
    "dateAdded": "2020-02-07",
    "dateModified": "2023-04-14"
}, {
    "_id": "wRJIJvRbLExe",
    "content": "We must never forget that it is through our actions, words, and thoughts that we have a choice.",
    "author": "Sogyal Rinpoche",
    "tags": ["Famous Quotes"],
    "authorSlug": "sogyal-rinpoche",
    "length": 95,
    "dateAdded": "2020-12-19",
    "dateModified": "2023-04-14"
}, {
    "_id": "YvtmjTGA6Qs1",
    "content": "He who knows himself is enlightened.",
    "author": "Laozi",
    "tags": ["Wisdom"],
    "authorSlug": "laozi",
    "length": 36,
    "dateAdded": "2021-01-30",
    "dateModified": "2023-04-14"
}, {
    "_id": "S78ad3jDcyA",
    "author": "John Madden",
    "content": "The fewer rules a coach has, the fewer rules there are for players to break.",
    "tags": ["Sports", "Competition"],
    "authorSlug": "john-madden",
    "length": 76,
    "dateAdded": "2022-07-06",
    "dateModified": "2023-04-14"
}, {
    "_id": "2qxP73FkXf66",
    "content": "History will be kind to me for I intend to write it.",
    "author": "Winston Churchill",
    "tags": ["Famous Quotes"],
    "authorSlug": "winston-churchill",
    "length": 52,
    "dateAdded": "2020-01-31",
    "dateModified": "2023-04-14"
}, {
    "_id": "tUWq0SLGX_L2",
    "content": "Better than a thousand hollow words, is one word that brings peace.",
    "author": "The Buddha",
    "tags": ["Wisdom"],
    "authorSlug": "the-buddha",
    "length": 67,
    "dateAdded": "2021-04-08",
    "dateModified": "2023-04-14"
}, {
    "_id": "iUBBoBk8rSal",
    "content": "If you want your life to be more rewarding, you have to change the way you think.",
    "author": "Oprah Winfrey",
    "tags": ["Famous Quotes", "Change"],
    "authorSlug": "oprah-winfrey",
    "length": 81,
    "dateAdded": "2021-01-11",
    "dateModified": "2023-04-14"
}, {
    "_id": "4KgGhGyG8A",
    "content": "Friendship is held to be the severest test of character. It is easy, we think, to be loyal to a family and clan, whose blood is in your own veins.",
    "author": "Charles Eastman",
    "tags": ["Friendship"],
    "authorSlug": "charles-eastman",
    "length": 146,
    "dateAdded": "2020-04-15",
    "dateModified": "2023-04-14"
}, {
    "_id": "ku_iO1mgPEqh",
    "content": "To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do.",
    "author": "Kahlil Gibran",
    "tags": ["Famous Quotes"],
    "authorSlug": "kahlil-gibran",
    "length": 117,
    "dateAdded": "2020-09-29",
    "dateModified": "2023-04-14"
}, {
    "_id": "as0ElEk5g7",
    "author": "Charles Dickens",
    "content": "No one is useless in this world who lightens the burdens of another.",
    "tags": ["Generosity"],
    "authorSlug": "charles-dickens",
    "length": 68,
    "dateAdded": "2023-04-14",
    "dateModified": "2023-04-14"
}]



let state = {};
let quoteIndex = Math.floor(Math.random() * quotesArray.length);
// DOM Elements
let quote = document.getElementById("quoteDisplay");
let saveBtnDisplay = document.getElementById("save-btn-display");
let spn = document.querySelector("span");
let saveResults = document.createElement("p");
const text = quote.innerHTML = quotesArray[quoteIndex].content + " -" + quotesArray[quoteIndex].author;
console.log(quotesArray[quoteIndex].content);
function logQuotesAndAuthor() {
    quoteIndex = Math.floor(Math.random() * quotesArray.length);
    quote.innerHTML = quotesArray[quoteIndex].content + " -" + quotesArray[quoteIndex].author;
}

saveBtnDisplay.addEventListener("click", () => {

    saveResults.innerText = quotesArray[quoteIndex].content + " -" + quotesArray[quoteIndex].author;
    spn.appendChild(saveResults)
}
)

