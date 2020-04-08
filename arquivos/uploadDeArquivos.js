const fs = require('fs'); //filesystem

fs.readFile('../assets/salsicha.png', (erro, buffer) => {
    console.log('imagem foi buferrizada');

    fs.writeFile('../assets/salsicha2.png', buffer, (erro) => {
        console.log('imagem foi escrita');
    });
});