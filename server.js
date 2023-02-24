const fs = require("fs");
// Read data in syncronouousy
// const data = fs.readFileSync("bigdata.txt", "utf-8");
// console.log("data is:", data);

fs.readFile("bigdata.txt", "utf-8", (err, data) => {
  console.log(data);
});
