const path = require("path");

function getName(filename, name, newExt = "") {
    let ext = path.extname(filename);
    const base = path.basename(filename, ext);
    ext = (newExt.length === 0) ? ext : newExt;
    return `${base}${name}${ext}`;
}

function getDataFromCSV(content) {
    let arrRows = content.trim().split("\n");
    let arrKeys = arrRows.splice(0, 1)

    return {
        keys: arrKeys.join().split(";"),
        values: arrRows
    }
}

function formatValues(key, value) {
    switch(key) {
        case "birth":
        case "death":
            return formatDate(value);
        case "activities":
            return formatActivity(value);
        default:
            return value;
    }
}

function formatDate(value) {
    return value.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");
}

function formatActivity(value) {
    return value.toLowerCase().split(",");
}

module.exports = {
    getName,
    getDataFromCSV,
    formatValues
}

