import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../App.css';

const url = "http://localhost:3001/api/companies";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setCompanies(response.data);
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }, []);

  return (
    <div>
      {companies.map(company => (
        <div key={company.id}>
          <h2>{company.empresa}</h2>
          <img src={company.logo} alt={`Logo da ${company.empresa}`} />
        </div>
      ))}
    </div>
  );
};

export default CompanyList;