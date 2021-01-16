const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Altera uma informação no nack-end
 * DELETE: Deletar uma informação no back-end
 */

app.get('/projects', (req, res) => {
    return res.json({message: 'Hello GoStack e Hello Word'})
});

app.listen(3333, () => {
    console.log("Está tudo funcionando")
});