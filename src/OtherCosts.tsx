import React, { useState } from 'react';

const OtherCostsForm = () => {
    const [monthlyFee, setMonthlyFee] = useState<Number>(0);
    const [studentLoans, setStudentLoans] = useState<Number>(0);
    const [operatingCost, setOperatingCost] = useState<Number>(0);
    const [otherCosts, setOtherCosts] = useState<Number>(0);
    const [totalOther, setTotalOther] = useState<Number>(0);

    const CalculateTotalOtherCost = () => {
        const totalOther = monthlyFee + studentLoans + operatingCost + otherCosts;
        setTotalOther(totalOther);
    };

    return(
        <div className="card bg-light mb-3">
        <div className="card-body">

            <div className="input-group mb-3">
            <label htmlFor='monthlyFee'  style={{ padding: '8px' }}>Monthly Fee:  </label>
            <input type="number" id="monthlyFee" value ={  monthlyFee.toString()  } onChange={(e) => setMonthlyFee(Number(e.target.value))}></input>
            <span className="input-group-text">SEK </span>
            </div>

            <div className="input-group mb-3">
            <label htmlFor='studentLoans'  style={{ padding: '8px' }}>Student Loans:  </label>
            <input type="number" id="studentLoans" value ={ studentLoans.toString() } onChange={(e) => setStudentLoans(Number(e.target.value))}></input>
            <span className="input-group-text">SEK </span>
            </div>

            <div className="input-group mb-3">
            <label htmlFor='operatingCost'  style={{ padding: '8px' }}>Operating Cost:  </label>
            <input type="number" id="operatingCost" value ={ operatingCost.toString()} onChange={(e) => setOperatingCost(Number(e.target.value))}></input>
            <span className="input-group-text">SEK </span>
            </div>

            <div className="input-group mb-3">
            <label htmlFor='otherCosts'  style={{ padding: '8px' }}>Other Cost:  </label>
            <input type="number" id="otherCosts" value ={ otherCosts.toString() } onChange={(e) => setOtherCosts(Number(e.target.value))}></input>
            <span className="input-group-text">SEK </span>
            </div>

            <button className = 'btn btn-primary' onClick={ CalculateTotalOtherCost }>Calculate Total Other Costs</button>
            <p className= "result">Total Other Costs:  { totalOther.toString() } SEK</p>
            </div>
        </div>

    )
}

export default OtherCostsForm;