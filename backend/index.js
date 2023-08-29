const express = require("express");
const cors = require("cors");
const server = express();
const companylist = require ('./src/data/companylist.json');
const companyId = require ('./src/data/companylist.json');


server.use(cors());

server.get('/api/companies', (req, res) => {
    return res.json(companylist);
});

server.get('/api/companies:id', (req, res) => {
    return res.json(companyId);
});

const PORT = 3001; 

server.listen(PORT, () => {});
