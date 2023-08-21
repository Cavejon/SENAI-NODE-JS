var fs = require('fs');

fs.writeFile('novo.txt', 'Olá em node.js!', function (err) {
    if (err) throw err;
    console.log('Renomeado!');
});