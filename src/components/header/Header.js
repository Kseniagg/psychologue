import { NavLink } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import "./style.css";
import logo from "../../img/logo.png";

const Header = () => {

    return (
        <header>
            <div className="container header">
                <NavLink to="/" className="logo_link">
                    <img src={logo} className="logo" />
                </NavLink>
                <NavBar />
            </div>
        </header>
    )
}

export default Header;