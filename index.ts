import { load } from "cheerio";

const scrapeWikipedia = async () => {
  try {
    const res = await fetch("https://en.wikipedia.org/wiki/React_(software)");
    const text = await res.text();

    // Load the text using cheerio
    const $ = load(text);

    console.log($("h1").text());
  } catch (error) {
    console.log(error);
  }
};

scrapeWikipedia();
