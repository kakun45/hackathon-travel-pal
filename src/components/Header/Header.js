import "./Header.scss";
import { Link } from 'react-router-dom';
import Nav from "../../assets/images/nav4.png";


const Header = () => {
    return (
        <header>
            <Link to='/'>
                <div className="header__div">
                    <h1 className="header__title">TRAVEL PAL</h1>
                    <img src={Nav} alt="nav" className="header__nav"></img>

                </div>
            </Link>
        </header >
    )
};


export default Header;