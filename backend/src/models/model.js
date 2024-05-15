//importando a conexão com o banco de dados
import connection from '../config/database.js';

//exportando a função de criação de registro
export function create(id, nome, cpf, data_nascimento, genero, estado_civil, telefone, email, cep) {
    connection.query('INSERT INTO morador (id_morador, nome_morador, cpf_morador, data_nascimento_morador, genero_morador, estado_civil_morador, telefone_morador, email_morador, cep_morador) VALUES (?,?,?,?,?,?,?,?)', [id, nome, cpf, data_nascimento, genero, estado_civil, telefone, email, cep], callback);
}

//exportando a função de leitura de dados do banco de dados
export function read(callback) {
    connection.query('SELECT * FROM morador WHERE ativo_morador = 1', callback);
}

//exportando a função de deletar(inativar) o registro no banco de dados 
export function deleteM(id_morador, callback) {
    connection.query('UPDATE morador SET ativo_morador = 0 WHERE id_morador = ? ', [id_morador], callback);
}