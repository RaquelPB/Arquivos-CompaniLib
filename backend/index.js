const express = require("express"); 
const server = express();
const companies = require ('./src/data/company-list.json');
const companyId = require ('./src/data/company-list.json');

server.get('/companies', (req, res) => {
    return res.json(companies);
});

server.get('/companies/:id', (req, res) => {
    return res.json(companyId);
});

const PORT = 3000; 

server.listen(PORT, () => {});
