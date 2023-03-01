const { writeFile, readFile } = require("fs");

const date = new Date();

let fecha = date.toLocaleString("es-AR");

writeFile("hora.txt", fecha, (err) => (err ? console.log(err) : null));

readFile("hora.txt", "utf-8", (err, res) => {
err ? console.log(err) : console.log(res);
});
