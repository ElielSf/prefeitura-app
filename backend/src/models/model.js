//importando a conexão com o banco de dados
import connection from '../config/database.js';

//exportando a função de criação de registro
export function create(dadosCadastro, callback) {
    connection.query('INSERT INTO morador set ?', [dadosCadastro], callback);
}

//exportando a função de leitura de dados do banco de dados
export function read(callback) {
    connection.query('SELECT * FROM morador WHERE ativo_morador = 1', callback);
}

//exportando a função de atulaização de cadastro no banco de dados
export function update(id, novosDados, callback) {
    connection.query('UPDATE morador set ? WHERE id_morador = ?', [novosDados, id], callback);
}

//exportando a função de deletar(inativar) o registro no banco de dados 
export function deleteM(id_morador, callback) {
    connection.query('UPDATE morador SET ativo_morador = 0 WHERE id_morador = ? ', [id_morador], callback);
}