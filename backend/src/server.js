import express from 'express';
import cors from 'cors';

//importando as funções assíncronas do CRUD no controller
import { createMorador, readMoradores, updateMorador, deleteMorador } from './controllers/controller.js';

//usando o dotenv para variáveis de ambiente
const PORT = process.env.PORT ?? 3000;
//criando o servidor
const app = express();

//middleware de nível de aplicação para converter os dados do body para json e
//para permitir que o servidor receba dados de origem externa(CORS)
app.use(express.json());
app.use(cors());

//rotas de CRUD que levam para o controller
app.post('/moradores/cadastrar', createMorador);
app.get('/moradores/exibir', readMoradores);
app.put('/moradores/:id', updateMorador);
app.delete('/moradores/:id', deleteMorador);

//comando 'npm run dev' para rodar
try {
    app.listen(PORT, (err) => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
} catch (err) {
    console.log('Ocorreu um erro: ' + err);
}
