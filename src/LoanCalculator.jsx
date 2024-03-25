import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoanCalculatorForm = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [repaymentPeriodYears, setRepaymentPeriodYears] = useState(0);
  const [paymentPlan, setPaymentPlan] = useState('standard');
  const [monthlyPayment, setMonthlyPayment] = useState(0);


  const CalculateLoanPayment = async () => {
      try {
        const data = {
          loanAmount,
          interestRate,
          repaymentPeriodYears,
          //paymentPlan
        };
  
        await axios({
          method: "post",
          baseURL: "http://localhost:4000",
          url:"/loan/calculate",
          headers: {
            'Content-Type': 'application/json'
          }, 
          data: data,
        })
        .then(function (response) {
          console.log(response)
          if(!response){
            throw new Error('No response recieved');
          }
          setMonthlyPayment(response.data);
        });

      } catch (error) {
        if(error.response && error.response.status == 419) {
          console.log('Session expired, please log in again.')
        } else {
          console.error('Error calculating loan payment:', error);
        }
      }
  };

  return (
    <div className="card bg-light mb-3">
      <div className="card-body">
      
      <div>
      <label htmlFor="loanAmountInput">Loan Amount: </label>
      <input id ="loanAmountInput" type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
      <label htmlFor="loanAmountInput">SEK </label>
      </div>

      <div>
      <label htmlFor="interestRateInput">Interest Rate: </label>
      <input id = "interestRateInput" type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      <label htmlFor="interestRateInput"> % </label>
      </div>

      <div>
      <label htmlFor="repaymentPeriodInput">Repayment Period in Years:</label>
      <input id= "repaymentPeriodInput "type="number" value={repaymentPeriodYears} onChange={(e) => setRepaymentPeriodYears(e.target.value)} />
      </div>
      <div>
      <label htmlFor="paymentPlan">Choose Repayment Plans: </label>
      <select id="paymentPlan" value={paymentPlan} onChange={(e) => setPaymentPlan(e.target.value)}>
        <option value="standard">Standard</option>
        <option value="extended">Extended</option>
      </select>
      </div>
      <div>
      <button className='btn btn-primary'
      onClick={CalculateLoanPayment}>Calculate Monthly Payment</button>
      <p id= "monthlyPayment" > Monthly Payment: { monthlyPayment } SEK </p>
    </div>
    </div>
    </div>
  );
};

export default LoanCalculatorForm;
