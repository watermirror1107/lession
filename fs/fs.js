const fs = require('fs');
fs.readFile('./test.pos', {encoding: 'utf8'}, (err, data) => {
    console.log(data.toString())
})
