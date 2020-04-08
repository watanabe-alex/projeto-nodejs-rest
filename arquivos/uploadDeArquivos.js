const fs = require('fs'); //filesystem

fs.createReadStream('../assets/salsicha.png')
    .pipe(fs.createWriteStream('../assets/salsicha-stream.png'))
    .on('finish', () => console.log('imagem foi escrita com sucesso.'));