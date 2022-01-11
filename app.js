const express = require('express');
const consultarCNPJ = require("consultar-cnpj");

const app = express();

app.get('/consulta', async function(req, res) {
    const { cnpj } = req.query;
    await consultarCNPJ(cnpj).then((response) => {
        res.status(200);
        res.send(response);
    }).catch((error) => {
        res.status(500);
        res.send(error);
    })
});

app.listen(3001, function() {
    console.log('Microsserviço iniciado na porta http://localhost:3001');
});