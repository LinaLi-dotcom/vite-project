import "./App.css";
import React from 'react';
import Header from './Header.tsx'
import LoanCalculator from '../LoanCalculator.jsx';
import OtherCosts from '../OtherCosts.tsx';
import Navbar from '../Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className= "container">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Header */}
            <Header
            totalPrice = "1 500 000"
            monthlyFee = "5000"
            operatingCost = "500"
            address = "123 Main Street, Cityville, State, ZIP" />
          
      {/* Main Content */}
      <div className="row">
        {/* Loan Calculator */}
        <div className="col-6">
          <LoanCalculator></LoanCalculator>
        </div>
        {/* Other Costs */}
        <div className="col-6">
          <OtherCosts></OtherCosts>
        </div>
      </div>
    </div>
  )
}

export default App
