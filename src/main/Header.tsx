import apartment from './apartment.jpg';

type Args = {
    totalPrice: string,
    monthlyFee: string,
    operatingCost: string,
    address: string
}

const Header = ({ totalPrice,monthlyFee,operatingCost, address }: Args) => {
    return (
        <div  className="container">
        <div className="row justify-content-center">
         <header className = "row mb-4">
            <div className="col-md-6">
                <img
                    src={ apartment }
                    className='img-fluid'
                    alt="apartmentimg"
                ></img>
            </div>
            <div className="list-group list-group-flush col-md-6 justify-content-center" >
                <div className='list-group-item fw-bold' > Total Price: { totalPrice } SEK</div>
                <div className='list-group-item fw-bold'> Monthly Fee: { monthlyFee } SEK</div>
                 <div className='list-group-item fw-bold'> OperatingCost: { operatingCost } SEK</div>
                 <div className='list-group-item fw-bold'> Adress:  { address }</div>
            </div>
         
        </header> 
        </div>
        </div>
    );
}

export default Header;