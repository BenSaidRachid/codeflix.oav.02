const fs = require('fs');
const { Transform } = require("stream");
const { getName } = require("./helper");

function csv2json(filename) {
    getName(getName, "");
    const rstream = fs.createReadStream(filename);

    if(inStdout) {
        let content = "";
        rstream.on("data", chunk => {
            content += chunk.toString().replace(re, str => fn(str));
        })

        rstream.on("data", () => {
            console.log(content)
        })
    } else {
        const wstream = fs.createWriteStream(transformFilename);
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