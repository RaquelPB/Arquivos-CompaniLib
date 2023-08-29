import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CompanyProfile = () => {
  const { id } = useParams();
  console.log(id);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/companies/${id}`)
      .then(response => {
        setCompany(response.data);
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }, [id]);

  if (!company) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <img src={company.logo} alt={`Logo da ${company.empresa}`} />
      <h2>{company.empresa}</h2>
      <p><span>Descrição:</span>{company.descricao}</p>
      <p><span>Contatos:</span> {company.contatos}</p>
    </div>
  );
};

export default CompanyProfile;
