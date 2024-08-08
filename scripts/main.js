import RonSwansonAPI from "./RonSwansonAPI.js";
import UnsplashAPI from "./UnsplashAPI.js";
import KanyeAPI from "./KanyeAPI.js";
import CatAPI from "./CatAPI.js";
import { UnsplashAPIKey, CatAPIKey } from "./apiKeys.js";

const contentForm = document.querySelector("#content__form");
const contentQuote = document.querySelector("#content__quote");
const contentQuoteAuthor = document.querySelector("#content__quote-author");
const background = document.querySelector("#background-container");
const formSelect = document.querySelector("#form-select");

// background.style.background = `black`;
const kanyeAPI = new KanyeAPI();
const ronSwansonApi = new RonSwansonAPI();
const unsplashAPI = new UnsplashAPI(UnsplashAPIKey);
const catAPI = new CatAPI(CatAPIKey);

async function getQuotes() {
    let quoteChance = Math.random();
    if (quoteChance < 0.5) {
        let quote = await kanyeAPI.getQuote();
        // console.log(quote.quote);
        contentQuote.innerText = quote.quote;
        contentQuoteAuthor.innerText = "--Kanye West";
    } else {
        let quote = await ronSwansonApi.getQuote();
        // console.log(quote[0]);
        contentQuote.innerText = quote;
        contentQuoteAuthor.innerText = "--Ron Swanson";
    }
    await getBackImg("cat");
}

async function refreshQuotes(event) {
    event.preventDefault();
    await getQuotes();
    console.log("DONE!");
}

async function getBackImg(query) {
    try {
        let backgroundImg = await unsplashAPI.getBackgroundImage(query);
        background.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${backgroundImg}")`;
        background.style.backgroundSize = "cover";
        background.style.backgroundPosition = "center";
        background.style.backgroundRepeat = "none";
        console.log("New Background!");
    } catch (error) {
        let backgroundImg = await catAPI.getImage();
        console.log(backgroundImg);
        background.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${backgroundImg}")`;
        background.style.backgroundSize = "cover";
        background.style.backgroundPosition = "center";
        background.style.backgroundRepeat = "none";
        console.log("New Background!");
    }
}

async function changeBackground(event) {
    event.preventDefault();
    let query = event.target.value;
    console.log(query);
    await getBackImg(query);
}

getQuotes();
contentForm.addEventListener("submit", refreshQuotes);
formSelect.addEventListener("change", changeBackground);
