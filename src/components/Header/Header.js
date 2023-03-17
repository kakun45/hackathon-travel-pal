import "./Header.scss";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <Link to='/'>
                <div className="header__div">
                    <h1 className="header__title">TRAVEL PAL</h1>
                </div>
            </Link>
        </header >
    )
};


export default Header;