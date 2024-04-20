const path = require('path');
const rootDir = require('../util/path');
exports.invalidUrl = (req,res,next) => {
    res.this.status(404).sendFile(path.join(o,'views','404.html'))
};