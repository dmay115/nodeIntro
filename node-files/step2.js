const axios = require("axios");
const fs = require("fs");

function cat(path) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            console.log("error:", err);
        } else {
            console.log(data);
        }
    });
}

function webCat(URL) {
    axios.get(URL).then(function (response) {
        data = response.data;
        console.log(data);
    });
}

let path = process.argv[2];

if (path.slice(0, 4) === "http") {
    webCat(path);
} else {
    cat(path);
}
