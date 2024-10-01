import { createPool } from 'mysql2/promise';
import { HOST, USER, PASSWORD, DATABASE } from './config.js';

console.log(HOST, USER, PASSWORD, DATABASE);

//criando a conexão com o banco de dados
export const connection = createPool({
   host: HOST,
   user: USER,
   password: PASSWORD,
   database: DATABASE 
});

//obtendo os dados de acordo com o id
export async function getMoradorById(id) {
    const [rows] = await connection.query('SELECT * FROM morador WHERE id_morador = ?', [id]);
    return rows[0];
};