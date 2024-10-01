import { createMorador, readMoradores, updateMorador, deleteMorador } from './controllers/controller.js';

beforeAll(async () => {
    await connection.query("CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))");
});