import { NavLink } from "react-router-dom";

import "./style.css";

const NavBar = () => {

    return (
        <>


            <div className="nav">
                <ul className="nav-list">

                    <li className="nav-list__item">
                        <a href="/"
                            className=""

                        >
                            Accueil
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a
                            href="#aboutme-section"
                            className=""
                        >
                            A propos
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a
                            href="#prices-section"

                        >
                            Prix
                        </a>
                    </li >
                    <li className="nav-list__item">
                        <a href="#contacts-section"

                        >
                            Contacts
                        </a>
                    </li >
                </ul>
            </div>


        </>
    )
}

export default NavBar;