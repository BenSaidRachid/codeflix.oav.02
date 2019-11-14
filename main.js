const { duplicate , transformStdout} = require("./streambox")

const args = process.argv.slice(2);

if(args.length !== 1) {
    console.log("usage: node main.js <FILENAME>");
    process.exit(0)
}

const filename = args[0];

transformStdout(filename, /Chopin/g, () => {
    return "Toto"
})