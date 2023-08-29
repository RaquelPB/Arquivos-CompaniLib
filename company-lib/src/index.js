import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './pages/Header';
import CompanyList from  './pages/CompanyList';
import CompanyProfile from './pages/CompanyProfile';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Header />} />
          <Route path="/companyList" element={<CompanyList />} />
          <Route path="/companyProfile" element={<CompanyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


