import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Recurso do express para converter requisições para o formato json
app.use(bodyParser.json())

const PORT = 3000;

app.get('/teste', (req, res) => {
    res
    .status(200)
    .send({mensagem: 'Boas-vidas à API'});
})

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
})

export default app;