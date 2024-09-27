import { createPool } from 'mysql2/promise';

//criando a conexão com o banco de dados
const connection = createPool({
   host: process.env.HOST,
   user: process.env.USER,
   password: process.env.PASSWORD,
   database: process.env.DATABASE 
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