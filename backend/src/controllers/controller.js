import { randomUUID } from 'crypto';

//importando as funções de CRUD do model.js
import { create, read, deleteM } from '../models/model.js';

//exportando a função assíncrona de criar cadastro
export async function createMorador (req, res) {
    const id = randomUUID();
    //recebendo os dados do body em formato json
    const { nome, cpf, data_nascimento, genero, estado_civil, telefone, email, cep } = req.body;
    //usando a função create com os parâmetros requisitados para criar o registro
    create(id, nome, cpf, data_nascimento, genero, estado_civil, telefone, email, cep, (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Ocorreu um erro no servidor que impediu o cadastro do morador. ', error: err });
        }
        res.status(201).send({ message: 'Morador cadastrado no banco de dados com sucesso.', data: result });
    });
};

//exportando a função assíncrona de ler os dados dos moradores do banco de dados
export async function readMoradores (req, res) {
    //usando a função read para ler todos os dados armazenados no banco de dados
    read((err, result) => {
        if (err) {
            res.status(500).send({ message: 'Erro na leitura dos dados dos moradores.', error: err});
        }
        res.status(200).send({ message: 'Leitura dos dados realizada com sucesso.', data: result });
    });
};

export async function updateMorador (req, res) {
    console.log('a');
};

//exportando a função para inativar o cadastro
export async function deleteMorador (req, res) {
    //requisitando o id do cadastro a ser inativado
    const id_morador = req.body.id_morador;
    //usando a função deleteM com o parâmetro requisitado para inativar o cadastro no banco de dados
    deleteM(id_morador, (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Erro ao deletar o morador do banco de dados.', error: err });
        }
        res.status(200).send({ message: 'O morador foi inativado no banco de dados.', data: result });
    });
};