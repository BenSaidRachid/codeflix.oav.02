const fs = require('fs');
const path = require("path");

function duplicate(filename) {
    const ext = path.extname(filename);
    const base = path.basename(filename, ext);
    const duplicateFilename = `${base}.duplicate${ext}`;
    const rstream = fs.createReadStream(filename);
    const wstream = fs.createWriteStream(duplicateFilename);
    
    rstream.pipe(wstream);
    console.log(`File: ${filename} successfully duplicated!`)
}

module.exports = {
    duplicate
}