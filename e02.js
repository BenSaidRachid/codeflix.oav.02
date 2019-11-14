const fs = require('fs');
const path = require("path");
const { Transform } = require("stream");

function transform(filename, re, fn) {
    const ext = path.extname(filename);
    const base = path.basename(filename, ext);
    const transformFilename = `${base}.transform${ext}`;
    const rstream = fs.createReadStream(filename);
    const wstream = fs.createWriteStream(transformFilename);
    const tstream = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().replace(re, str => fn(str)));
            callback();
        }
    })
    rstream.pipe(tstream).pipe(wstream);
}

module.exports = {
    transform
}