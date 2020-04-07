//responsabilidade desse arquivo é subir o servidor no ar
const customExpress = require('./config/customExpress');

const conexao = require('./infraestrutura/conexao');

const Tabelas = require('./infraestrutura/tabelas');


//conecta com o banco de dados
conexao.connect(erro => {

    if(erro) {

        console.log(erro);

    } else {

        console.log('Conectado com o banco de dados');

        Tabelas.init(conexao);

        const app = customExpress();
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });

    }
});

