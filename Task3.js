const fs = require("fs");

function countWordsInFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const words = data.trim().split(/\s+/);
        resolve(words.length);
      }
    });
  });
}

const filename = "data.txt";
countWordsInFile(filename)
  .then((wordCount) => {
    console.log(`Total word count in "${filename}": ${wordCount}`);
  })
  .catch((err) => {
    console.error(`Error reading "${filename}": ${err.message}`);
  });
