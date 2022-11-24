/*
 * Title : Quotes library
 * Description : Utility library for quotes list
 * Author : Adir
 * Date : 23/11/22
 */

//Dependencies

const fs = require("fs");

// Quotes object - module scaffolding
const quotes = {};

//Get all quotes
quotes.getAllQuotes = () => {
  //Read the text file containing the quotes
  const getQuotes = fs.readFileSync(`${__dirname}/quotes.txt`, "utf8");
  //turn the string into an array
  const allQuotes = getQuotes.split(/\r?\n/);

  //return the array
  return allQuotes;
};

//Export the library
module.exports = quotes;
