import { NavLink } from "react-router-dom";
import "./style.css";

const NavBar = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <>
            <div className="nav">
                <div className="container">
                    <ul className="nav-list">

                        <li className="nav-list__item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Обо мне
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Тарифы
                            </NavLink>
                        </li >
                        <li className="nav-list__item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Контакты
                            </NavLink>
                        </li >
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar;