import React, { Component } from 'react';
import Header from "./pages/Header";
import { Routes, Route } from 'react-router-dom';
import CompanyList from './pages/CompanyList';
import CompanyProfile from './pages/CompanyProfile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
          <Header />
        </div>
        <div className="CompanyList">
          <Routes>
            <Route path="/" element={<CompanyList />} />
            <Route path="/companyProfile/:id" element={<CompanyProfile />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
