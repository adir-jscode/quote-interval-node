/*
 * Title : Math library
 * Description : Utility library for math-related functions
 * Author : Adir
 * Date : 23/11/22
 */

// Math object - Module scaffolding
const math = {};

// Get a random integer between two integers
// Source : http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

math.getRandomValues = (min, max) => {
  let minimum = min;
  let maximum = max;
  minimum = typeof min === "number" ? minimum : 0;
  maximum = typeof max === "number" ? maximum : 0;
  return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};

//export the library
module.exports = math;
