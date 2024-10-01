import { connection, getMoradorById } from '../config/database.js';

describe('getMoradorById', () => {
    beforeAll(async () => {
        await connection.query("CREATE TABLE IF NOT EXISTS morador (`id_morador` INT(11) NOT NULL AUTO_INCREMENT,`nome_morador` VARCHAR(300) NOT NULL,`cpf_morador` VARCHAR(14) NOT NULL,`data_nascimento_morador` VARCHAR(11) NOT NULL,`genero_morador` VARCHAR(50) NOT NULL,`estado_civil_morador` VARCHAR(8) NOT NULL,`telefone_morador` VARCHAR(13) NOT NULL,`email_morador` VARCHAR(45) NOT NULL,`cep_morador` CHAR(8) NOT NULL,`ativo_morador` INT(11) NOT NULL DEFAULT 1 COMMENT '1 -> Active\n0 -> Inactive',PRIMARY KEY (`id_morador`),UNIQUE INDEX `email_citizen_UNIQUE` (`email_morador` ASC) VISIBLE,UNIQUE INDEX `cpf_moradores_UNIQUE` (`cpf_morador` ASC) VISIBLE)")
        await connection.query("INSERT INTO morador (nome_morador, cpf_morador, data_nascimento_morador, genero_morador, estado_civil_morador, telefone_morador, email_morador, cep_morador) VALUES ('Eliel', '123.456.789-10', 'e', 'e', 'e', '5575933008953', 'e', '12345678')");
    });
    
    afterAll(async () => {
        // await connection.query("TRUNCATE TABLE morador");
        // await connection.end();
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

describe('Atualizar morador', () => {   
    test('Atualizar nome do morador com id 1', async () => {
        await connection.query('UPDATE morador SET nome_morador = "Eliel Souza" WHERE id_morador = 1');
    });
});