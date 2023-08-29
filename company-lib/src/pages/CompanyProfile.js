import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const CompanyProfile = () => {
  const { id } = useParams();
  console.log(id);
  const [company, setCompany] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false); 

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
    <div className='companyProfile'>
      <div className='profileBox'>
        <img src={company.logo} alt={`Logo da ${company.empresa}`} />
        <h2>{company.empresa}</h2>
        <p className='descricao'>
          <span><b>Descrição: </b></span>
          <b>{showFullDescription ? company.descricao : `${company.descricao.slice(0, 100)}...`}</b>
        </p>
        <button onClick={() => setShowFullDescription(!showFullDescription)}>
          {showFullDescription ? '<<<Mostrar Menos' : 'Mostrar Mais>>>'}
        </button>
        <p className='contatos'><span><b>Contatos: </b></span> {company.contatos}</p>
      </div>
    </div>
  );
};

export default CompanyProfile;
