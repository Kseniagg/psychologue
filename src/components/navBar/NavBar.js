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
                            Главная
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a
                            href="#aboutme-section"
                            className=""
                        >
                            Обо мне
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a
                            href="#prices-section"

                        >
                            Тарифы
                        </a>
                    </li >
                    <li className="nav-list__item">
                        <a href="#contacts-section"

                        >
                            Контакты
                        </a>
                    </li >
                </ul>
            </div>


        </>
    )
}

export default NavBar;