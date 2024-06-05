import { NavLink } from "react-router-dom";
import { useState } from 'react';
import NavBar from "../navBar/NavBar";
import MenuBurger from '../menuBurger/MenuBurger';
import "./style.css";
import logo from "../../img/logo.png";


const Header = () => {
    /* const items = [{ value: "Главная", href: '/' }, { value: "Обо мне", href: '#aboutme-section' }, { value: "Тарифы", href: '#prices-section' }, { value: "Контакты", href: '#contacts-section' }] */
    const items = [{ value: "Главная", href: '/' },
    { value: "A propos", href: '#aboutme-section' },
    { value: "Prix", href: '#prices-section' },
    { value: "Contacts", href: '#contacts-section' }]
    const [menuActive, setMenuActive] = useState(false);

    return (
        <header>
            <div className="container header">
                <NavLink to="/" className="logo_link">
                    <img src={logo} className="logo" />
                </NavLink>
                <NavBar />
            </div>
            <nav className={menuActive ? "navbar activated" : "navbar"}>
                <div className={menuActive ? "burger-btn activated" : "burger-btn"} onClick={() => setMenuActive(!menuActive)}>
                    <span />
                </div>
            </nav>
            <MenuBurger active={menuActive} setActive={setMenuActive} items={items} />
        </header>
    )
}

export default Header;