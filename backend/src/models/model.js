//importando a conexão com o banco de dados
import connection from '../config/database.js';

//exportando a função de criação de registro
export function create(dadosCadastro, callback) {
    connection.query('INSERT INTO morador SET ?', [dadosCadastro], callback);
}

//exportando a função de leitura de dados do banco de dados
export function read(callback) {
    connection.query('SELECT * FROM morador WHERE ativo_morador = 1 ORDER BY id_morador DESC', (err, result) => {
        if (err) {
            callback(err, result);
        }
        const dadosMoradores = JSON.stringify(result);
        callback(null, dadosMoradores);
    });
}

//exportando a função de atualização de cadastro no banco de dados
export function update(novosDados, id_morador, callback) {
    connection.query('UPDATE morador SET ? WHERE id_morador = ?', [novosDados, id_morador], callback);
}

//exportando a função de deletar(inativar) o registro no banco de dados 
export function deleteM(id_morador, callback) {
    connection.query('UPDATE morador SET ativo_morador = 0 WHERE id_morador = ? ', [id_morador], callback);
}