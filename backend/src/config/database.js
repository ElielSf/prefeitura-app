import { createConnection } from 'mysql2'

const connection = createConnection({
   host: 'localhost',
   user: 'root',
   password: 'root',
   database: 'cadastrodb' 
});

connection.connect((err) => {
    if (err) {
        console.log('Erro na conexão: ' + err.stack);
        return;
    }
    console.log('Conectado ao Banco de Dados');
});

export default connection;