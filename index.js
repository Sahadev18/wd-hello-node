const fs = require("fs");
fs.rename("sample.txt", "test.txt",
    (err) => {
        if(err) throw err;
        console.log("File name updated");
    });