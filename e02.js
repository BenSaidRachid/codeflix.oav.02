const fs = require('fs');
const { Transform } = require("stream");
const {getName} = require("./helper");

function transform(filename, re, fn) {
    const rstream = fs.createReadStream(filename);
    const wstream = fs.createWriteStream(getName(filename, ".transform"));
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