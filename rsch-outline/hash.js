let encrypt = "chrome-extension";

let crypto = require('crypto');

let hash = crypto.createHash('md5').update(encrypt).digest('hex');

console.log(hash);