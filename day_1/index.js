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

// for part we added windowSize argument. For part 1 this must be set to 1. for Part 2 we just need to set it to 3 to solve it!
// instead of doing (A + B + C) < (B + C + D), we can just simply do A < D. This is because, in the sliding window we always share 2 middle values!
// this makes them null and we can skip the computation.
function getNumberOfIncreases(data, windowSize = 3) {
  return data.reduce(function (count, current, currentIndex) {
    return data[currentIndex + windowSize] > current ? count + 1 : count;
  }, 0);
}

// cd into /day_1 then run: node index.js to get the result.
console.log(getNumberOfIncreases(data));
