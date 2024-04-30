import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import pic from "../../img/aboutOlga.jpg";
import girl from "../../img/girl.png";


const AboutMe = () => {

    const [offset, setOffset] = useState({ x: 70, y: -30 });

    const moveBackground = (e) => {
        e.stopPropagation();
        const offsetX = (e.clientX / window.innerWidth * 70) - 2;
        const offsetY = (e.clientY / window.innerHeight * 30) - 15;
        setOffset({ x: offsetX, y: offsetY });
    };

    return (
        <>
            <div className="section" id="#aboutme-section">
                <div className="img_bulls">
                    <div className="parallax background-bigs-bulls"
                        onMouseMove={moveBackground}></div>
                    <div className="parallax background-smalls-bulls"
                        style={{ backgroundPosition: `${offset.x}px ${offset.y}px` }}
                    ></div>
                    <h3>Обо мне</h3>

                    <div className="about-section">
                        <div className="girl-box">
                            <img className="img_girl" src={girl} />
                        </div>

                        <div className="text_section">
                            <div>Первая профессия</div>
                            <div>Вела тренинги</div>
                            <div>Житейский "психолог"</div>
                            <div>Хобби - книги по психологии</div>
                            <div>Смена професии</div>
                            <div>Магистратура</div>
                        </div>

                        <div className="picture_section">
                            <img src={pic} alt="photoOlga" className="photo_aboutme" />
                            <Link> Мои статьи на b24 </Link >
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