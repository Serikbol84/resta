
import logo from "./logo.png"

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-logo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
        </header>
    );
}
 
export default Header;
