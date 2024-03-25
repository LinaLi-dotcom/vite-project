import "./App.css";
import React from 'react';
import Header from './Header.tsx'
import LoanCalculator from '../LoanCalculator.jsx';
import OtherCosts from '../OtherCosts.jsx';
import LoanVisualization from '../LoanVisualization.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className= "container">
      {/* Header */}
            <h1>Loan Calculator</h1>
            <Header apartmentDescription = 
            "Total Price: 1 500 000 SEK
            Monthly Fee: 5000 SEK
            Operating Cost: 500 SEK
            Size: 200 kvadratmeter
            Address: 123 Main Street, Cityville, State, ZIP" />
          
      {/* Main Content */}
      <div className="row">
        {/* Loan Calculator */}
        <div className="col-4">
          <LoanCalculator></LoanCalculator>
        </div>
        {/* Loan Visualization */}
        <div className="col-4">
          <OtherCosts></OtherCosts>
        </div>
      </div>
    </div>
  )
}

export default App
