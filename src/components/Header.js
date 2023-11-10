import { NavLink } from "react-router-dom";
import NavBar from "./navBar/NavBar";

const Header = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <header>
            <div className="container">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                    }
                >
                    Ольга БЕРГЕН
                </NavLink>
                <NavBar />
            </div>
        </header>
    )
}

export default Header;