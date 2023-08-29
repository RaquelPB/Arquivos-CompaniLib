import React, { Component } from 'react';
import Header from "./pages/Header";
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
          <CompanyList />
        </div>
        <div className="CompanyProfile">
          <CompanyProfile />
        </div>
      </div>
    );
  }
}

export default App;
