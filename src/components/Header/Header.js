import "./Header.scss";


const Header = () => {
    return (
        <header>
            <nav className="header">
                <div className="header__div">
                    <h1 className="header__title">TRAVEL PAL</h1>
                </div>
                <div class="navigation__links--section">
                    <ul class="navigation__tool">
                        <li class="navigation__link">HOME</li>
                        <li class="navigation__link">Contact Us</li>
                        <li class="navigation__link" >About</li>
                    </ul>
                </div>
            </nav>
            <section className="main">
                <div className="main__div">
                    <h2 className="main__title">WELCOME TO VEGAS</h2>
                </div>
            </section>
        </header >
    )
};


export default Header;