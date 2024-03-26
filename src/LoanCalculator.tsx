import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoanCalculatorForm = () => {
  const [loanAmount, setLoanAmount] = useState<Number>(0);
  const [interestRate, setInterestRate] = useState<Number>(0);
  const [repaymentPeriodYears, setRepaymentPeriodYears] = useState<Number>(0);
  const [paymentPlan, setPaymentPlan] = useState('standard');
  const [monthlyPayment, setMonthlyPayment] = useState<Number>(0);


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
    <div className="card text-bg-light mb-3">
      <div className="card-body">
      
      <div className='input-group mb-3'>
      <label htmlFor="loanAmountInput"style={{ padding: '8px' }}>Loan Amount:  </label>
      <input id ="loanAmountInput" type="number" value={ loanAmount.toString() } onChange={(e) => setLoanAmount(e.target.value)} />
      <span className='input-group-text'>SEK </span>
      </div>

      <div className='input-group mb-3'>
      <label htmlFor="interestRateInput" style={{ padding: '8px' }}>Interest Rate:  </label>
      <input id = "interestRateInput" type="number" value={ interestRate.toString()} onChange={(e) => setInterestRate(e.target.value)} />
      <span className='input-group-text'> % </span>
      </div>

      <div className='input-group mb-3'>
      <label htmlFor="repaymentPeriodInput" style={{ padding: '8px' }}>Repayment Period:  </label>
      <input id= "repaymentPeriodInput "type="number" value={ repaymentPeriodYears.toString() } onChange={(e) => setRepaymentPeriodYears(e.target.value)} />
      <span className='input-group-text'> Years </span>
      </div>

      <div className='input-group mb-3'>
      <label htmlFor="paymentPlan"  style={{ padding: '8px' }}>Choose Repayment Plans: </label>
      <select id="paymentPlan" value={paymentPlan} onChange={(e) => setPaymentPlan(e.target.value)}>
        <option value="standard">Standard</option>
        <option value="extended">Extended</option>
      </select>
      </div>

      <div>
      <button className='btn btn-primary'
      onClick={ CalculateLoanPayment }>Calculate Monthly Payment</button>

      <div className = "result">
      <p id= "monthlyPayment" > Monthly Payment: { monthlyPayment.toString() } SEK </p>
      </div>
     
    </div>
    </div>
    </div>
  );
};

export default LoanCalculatorForm;
