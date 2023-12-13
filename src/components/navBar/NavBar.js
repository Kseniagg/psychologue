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
                            href="/"
                            className=""
                        >
                            Обо мне
                        </a>
                    </li>
                    <li className="nav-list__item">
                        <a
                            href="/"

                        >
                            Тарифы
                        </a>
                    </li >
                    <li className="nav-list__item">
                        <a href="/"

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