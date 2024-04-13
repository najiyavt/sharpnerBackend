const path=require('path');
const p=require('../util/path');
exports.err = (req,res,next) => {
    res.status(404).sendFile(path.join(p,'views' , '404.html'))
};