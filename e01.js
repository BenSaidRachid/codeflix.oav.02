const fs = require('fs');
const getName  = require("./helper");

function duplicate(filename) {
    const rstream = fs.createReadStream(filename);
    const wstream = fs.createWriteStream(getName(filename, ".duplicate"));
    
    rstream.pipe(wstream);
    console.log(`File: ${filename} successfully duplicated!`)
}

module.exports = {
    duplicate
}