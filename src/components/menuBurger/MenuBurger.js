import './style.css';

const MenuBurger = ({ items, active, setActive }) => {
    return (
        <div className={active ? "menu active" : "menu"}>
            <div className="menu_items">
                <ul>
                    {items.map((item, n) => (
                        <li key={n}>
                            <a href={item.href}>{item.value}</a>
                        </li>))}
                </ul>
            </div>
        </div>
    );
};

export default MenuBurger;