import { connection, getMoradorById } from './database.js';

describe('getMoradorById', () => {
    beforeAll(async () => {
        await connection.query("INSERT INTO morador (nome_morador, cpf_morador, data_nascimento_morador, genero_morador, estado_civil_morador, telefone_morador, email_morador, cep_morador) VALUES ('Eliel', '123.456.789-10', 'e', 'e', 'e', '5575933008953', 'e', '12345678')");
    });
    
    afterAll(async () => {
        await connection.query("TRUNCATE TABLE morador");
        await connection.end();
    });

    test('Deve retornar o morador correto pelo id', async () => {
        const morador = await getMoradorById(1);
        expect(morador).not.toBeUndefined();
        expect(morador).toHaveProperty('id_morador', 1);
    });

    test('Verifica se parte do CPF está presente', async () => {
        const morador = await getMoradorById(1);
        expect(morador.cpf_morador).toMatch(/456.7/);
    });

    test('Verifica se parte do telefone está presente', async () => {
        const morador = await getMoradorById(1);
        expect(morador.telefone_morador).toMatch(/9330/);
    });

    test('Vai retornar o undefined se o morador não existir', async () => {
        const morador = await getMoradorById(999);
        expect(morador).toBeUndefined();
    });

    test('Verifica o número máximo de caracteres no campo de telefone', async () => {
        const morador = await getMoradorById(1);
        expect(morador.telefone_morador.length).toBeLessThanOrEqual(13);
    });
});