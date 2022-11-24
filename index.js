//Dependencies
const mathLibrary = require("./lib/math");
const quotesLibrary = require("./lib/quotes/quotes");

// App object - Module scaffolding
const app = {};

// configuration
app.config = {
  timeBetweenQuotes: 3000,
};

// Function that prints a random quote
app.printQuote = () => {
  // Get all quotes
  const allQuotes = quotesLibrary.getAllQuotes();

  // Get the length of the quotes
  const numberOfQuotes = allQuotes.length;

  //pick a random number between 1 and number Of Quotes
  const randomNumber = mathLibrary.getRandomValues(1, numberOfQuotes);

  // Get the quote at that position in the array
  const selectedQuote = allQuotes[randomNumber - 1];

  //Print quote to the console
  console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printQuote function as it goes

app.indefiniteLoop = () => {
  setInterval(app.printQuote, app.config.timeBetweenQuotes);
};

//Invoke the loop
app.indefiniteLoop();
