const fs = require("fs");

// Using node.js fs module to file stream the input.txt provided by the challenge
// .readFileSync is preffered for larger files
// we are then parsing this file into an array of numbers.
const data = fs
  .readFileSync("./input.txt", "utf8")
  .trim()
  .split("\n")
  .map((depth) => +depth.trim());

// We are using the .reduce() method. It lets us go item by item in a array and increasing our count each time
// when the next item in a array is larger than previous. Therefore, counting "increases".
// At the end of the data list, we actually receive "undefined" for data[currentIndex + 1],
// but this makes the condition falsey in Javascript and it doesn't return any errors back at us!
function getNumberOfIncreases(data) {
  return data.reduce(function (count, current, currentIndex) {
    return data[currentIndex + 1] > current ? count + 1 : count;
  }, 0);
}

// cd into /day_1 then run: node index.js to get the result.
console.log(getNumberOfIncreases(data));
