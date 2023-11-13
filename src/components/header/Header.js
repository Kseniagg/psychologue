import { NavLink } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import "./style.css";

const Header = () => {

    return (
        <header>
            <div className="container header">
                <NavLink to="/" className="logo">
                    Ольга БЕРГЕН
                </NavLink>
                <NavBar />
            </div>
        </header>
    )
}

export default Header;