import apartment from './apartment.jpg';

type Args = {
    apartmentDescriptione: string
}

const Header = ({ apartmentDescription }: Args) => {
    return (
        <header className = "row mb-4">
            <div className="col-md-5">
                <img
                    src={ apartment }
                    className='apartmentImg'
                    alt="apartmentimg"
                ></img>
            </div>
            <div className="col-md-7 mt-5">
                <div className='subtitle'> { apartmentDescription }</div></div>
            
        </header> 
    );
}

export default Header;