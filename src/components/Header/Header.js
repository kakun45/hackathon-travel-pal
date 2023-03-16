import "./Header.scss";

const Header = () => {
    return (
        <header >
            <nav className="header">
                <div className="header__logo">
                    <h1 className="header__title">TRAVEL PAL</h1>
                    <img src={Logo} alt="header image" className="header__image"></img>
                </div>
            </nav>
        </header >
    )
};

export default Header
