import { Link } from "react-router-dom";
import "./style.css";
import pic from "../../img/aboutOlga.jpg";

const AboutMe = () => {
    return (
        <>
            <div className="section" id="#aboutme-section">
                <h3>Обо мне</h3>
                <div className="about-section">
                    <div className="picture_section">
                        <img src={pic} alt="photoOlga" className="photo_aboutme" />
                        <Link> Ссылка </Link >
                    </div>
                    <div className="text_section">
                        <div>Первая профессия</div>
                        <div>Вела тренинги</div>
                        <div>Житейский "психолог"</div>
                        <div>Работая на госслужбе, в обеденные перерывы читала книги по психологии</div>
                        <div>Смена професии</div>
                        <div>Магистратура</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;