import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from"./App.js";
import CompanyList from './pages/CompanyList';
import CompanyProfile from './pages/CompanyProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/companyList" element={<CompanyList />} />
          <Route path="/companyProfile/:id" element={<CompanyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
