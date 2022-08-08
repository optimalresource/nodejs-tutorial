const { readFileSync, writeFileSync } = require("fs");
// const fs = require('fs');

console.log("starting the task");
// Read existing file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// create a new file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result:\r\n ${first}, ${second}`,
  { flag: "a" } // This is the third option that determines how the file is written
);

console.log("Done with the task");
console.log("Starting the next one");
