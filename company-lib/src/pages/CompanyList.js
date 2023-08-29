import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:3001/api/companies";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setCompanies(response.data);
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }, []);

  const handleCompanyClick = (companyId) => {
    navigate(`/companyProfile/${companyId}`);
  };

  return (
    <div className="box">
      {companies.map(company => (
        <div className="box-company" key={company.id}>
          <img src={company.logo} alt={`Logo da ${company.empresa}`} />
          <h2>{company.empresa}</h2>
          <button onClick={() => handleCompanyClick(company.id)}>Mais Detalhes</button>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;
