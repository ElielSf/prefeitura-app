import { createConnection } from 'mysql2';

//criando a conexão com o banco de dados
const connection = createConnection({
   host: 'localhost',
   user: 'root',
   password: 'root',
   database: 'cadastrodb' 
});

//conectando ao banco de dados
connection.connect((err) => {
    if (err) {
        console.log('Erro na conexão: ' + err.stack);
        return;
    }
    console.log('Conectado ao Banco de Dados');
});

//exportando a conexão
export default connection;