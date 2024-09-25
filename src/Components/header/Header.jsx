
import "./style.css"
import logo from "./logo.png"
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <Navbar />
                <div className="booking">
                    <a href="#">Book a Table</a>
                </div>
            </div>
        </header>
    );
}
 
export default Header;
