import './style.css';
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <ul className="container footer" id="contacts-section">
                <li><p>Contact</p>
                    <ul>
                        <li><a href="mailto:email@example.com">email@example.com</a></li>
                        <li><a href="tel:0123456778">01.23.45.67.78</a></li>
                        <li>rue Rivoli, 1</li>
                        <li>Paris, 750000</li>
                    </ul>
                </li>
                <li><p>A propos</p>
                    <ul>
                        <li>Votre avis est essentiel</li>
                        <li>
                            "Cette application web a été produite en 2024"
                        </li>
                    </ul>
                </li>
                <li><p>Reseaux sociaux</p>
                    <ul className="reseaux">
                        <li>
                            <a href=""><FaFacebookF /></a>
                        </li>
                        <li>
                            <a href=""><RiTwitterXFill /></a>
                        </li>
                        <li>
                            <a href=""><FaInstagram /></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;