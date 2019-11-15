const fs = require('fs');
const { Transform } = require("stream");
const {getName} = require("./helper");

function transformStdout(filename, re, fn, inStdout = true) {
    const rstream = fs.createReadStream(filename);

    if(inStdout) {
        let content = "";
        rstream.on("data", chunk => {
            content += chunk.toString().replace(re, str => fn(str));
        })

        rstream.on("end", () => {
            console.log(content)
        })
    } else {
        const wstream = fs.createWriteStream(getName(filename, ".transform"));
        const tstream = new Transform({
            transform(chunk, encoding, callback) {
                this.push(chunk.toString().replace(re, str => fn(str)));
                callback();
            }
        })
        rstream.pipe(tstream).pipe(wstream);
    }
}

module.exports = {
    transformStdout
}