import { useState } from "react";
import "./style.css";
import pic from "../../img/aboutOlga.jpg";
import girl from "../../img/girl.png";


const AboutMe = () => {

    const [offset, setOffset] = useState({ x: 65, y: -15 });

    const moveBackground = (e) => {
        e.stopPropagation();
        const offsetX = (e.clientX / window.innerWidth * 70) - 2;
        const offsetY = (e.clientY / window.innerHeight * 30) - 15;
        setOffset({ x: offsetX, y: offsetY });
    };

    return (
        <>
            <div className="section" id="aboutme-section">
                <div className="img_bulls">
                    <div className="parallax background-bigs-bulls"
                        onMouseMove={moveBackground}></div>
                    <div className="parallax background-smalls-bulls"
                        style={{ backgroundPosition: `${offset.x}px ${offset.y}px` }}
                    ></div>
                    {/*  <h3>Обо мне</h3> */}
                    <h3>A propos de moi</h3>
                    <span>Mon parcours professionnel</span>
                    <div className="about-section">
                        <div className="girl-box">
                            <img className="img_girl" src={girl} />
                        </div>

                        <div className="text_section">
                            {/* <div>Первая профессия</div>
                            <div>Вела тренинги</div>
                            <div>Житейский "психолог"</div>
                            <div>Хобби - книги по психологии</div>
                            <div>Смена професии</div>
                            <div>Магистратура</div> */}
                            <div>Premier diplôme d'économiste</div>
                            <div>Coach dans une banque</div>
                            <div>Hyperempathique émotionnel </div>
                            <div>Hobby - literature psychologique</div>
                            <div>Reconversion professionnelle</div>
                            <div>Master en psychologie</div>
                        </div>

                        <div className="picture_section">
                            <img src={pic} alt="photoOlga" className="photo_aboutme" />
                            {/* <a href="" className="about_section_link">Мои статьи на b24</a> */}
                            <a href="" className="about_section_link">Mes articles sur b24.fr</a>
                        </div>

                        {/*  <div className="text_section">
                        <div>Первая профессия</div>
                        <div>Вела тренинги</div>
                        <div>Житейский "психолог"</div>
                        <div>Работая на госслужбе, в обеденные перерывы читала книги по психологии</div>
                        <div>Смена професии</div>
                        <div>Магистратура</div>
                    </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;