const express = require("express");
const cors = require("cors");
const server = express();
const companylist = require('./src/data/companylist.json');

server.use(cors());

server.get('/api/companies', (req, res) => {
    return res.json(companylist);
});


server.get('/api/companies/:id', (req, res) => {
    const companyId = req.params.id;
    const company = companylist.find(company => company.id === parseInt(companyId));

    if (!company) {
        return res.status(404).json({ error: "Empresa não encontrada" });
    }

    return res.json(company);
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
