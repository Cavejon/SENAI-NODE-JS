var fs = require ('fs');

    fs.appendFile('novo.txt', 'Olá NodeJs! Senai', function (err){
        if (err) throw err;

        console.log('Arquivo Salvo!');
    })