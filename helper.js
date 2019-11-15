const path = require("path");

module.exports = function getName(filename, name) {
    const ext = path.extname(filename);
    const base = path.basename(filename, ext);
    return `${base}${name}${ext}`;
}
