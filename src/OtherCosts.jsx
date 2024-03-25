import React, { useState } from 'react';

const OtherCostsForm = () => {
    const [monthlyFee, setMonthlyFee] = useState(0);
    const [studentLoans, setStudentLoans] = useState(0);
    const [operatingCost, setOperatingCost] = useState(0);
    const [otherCosts, setOtherCosts] = useState(0);
    const [totalOther, setTotalOther] = useState(0);

    const CalculateTotalOtherCost = () => {
        const totalOther = monthlyFee + studentLoans + operatingCost + otherCosts;
        setTotalOther(totalOther);
    };

    return(
        <div className="card bg-light mb-3">
        <div className="card-body">

            <div>
            <label htmlFor='monthlyFee'>Monthly Fee: </label>
            <input type="number" id="monthlyFee" value ={ monthlyFee } onChange={(e) => setMonthlyFee(Number(e.target.value))}></input>
            <label htmlFor='monthlyFee'>SEK </label>
            </div>

            <div>
            <label htmlFor='studentLoans'>Student Loans: </label>
            <input type="number" id="studentLoans" value ={ studentLoans } onChange={(e) => setStudentLoans(Number(e.target.value))}></input>
            <label htmlFor='studentLoans'>SEK </label>
            </div>

            <div>
            <label htmlFor='operatingCost'>Operating Cost: </label>
            <input type="number" id="operatingCost" value ={ operatingCost } onChange={(e) => setOperatingCost(Number(e.target.value))}></input>
            <label htmlFor='operatingCost'>SEK </label>
            </div>

            <div>
            <label htmlFor='otherCosts'>Other Cost: </label>
            <input type="number" id="otherCosts" value ={ otherCosts } onChange={(e) => setOtherCosts(Number(e.target.value))}></input>
            <label htmlFor='otherCosts'>SEK </label>
            </div>

            <button className = 'btn btn-primary' onClick={ CalculateTotalOtherCost }>Calculate Total Other Costs</button>
            <p>Total Other Costs: { totalOther } SEK</p>
            </div>
        </div>

    )
}

export default OtherCostsForm;