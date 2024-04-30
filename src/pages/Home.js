import Header from "../components/header/Header";
import BtnBook from "../components/btnBook/BtnBook";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";
import AboutMe from "../components/aboutMe/AboutMe";
import Tarifs from "../components/tarifs/Tarifs";
import SpecialOffer from "../components/specialOffer/SpecialOffer";
import Tarifscopy from "../components/tarifs/Tarifscopy.js";
import "./style.css";
import pic1 from "../img/relationships.png";
import pic2 from "../img/money.png";
import pic3 from "../img/insomnia.png";
import HowWork from "../components/howWork/HowWork.js";



const Home = () => {



    return (
        <>



            <div>
                <Header />
                <div className="container main-section" >
                    <div className="bgd bgd-letters"></div>
                    <div className="bgd bgd-photo"></div>
                    <div className="main-text">
                        <div className="name-text">
                            <h1>Ольга Берген</h1>
                            <p>психолог</p>
                        </div>
                        <div>
                            <BtnBook />
                        </div>


                    </div>
                </div>

                <div className="container">

                    <article className="section-mywork">
                        <h3>Направления моей деятельности</h3>
                        <div className="article-mywork">
                            <div className="article-item">
                                <div className="img-box"><img src={pic3} className="article-img" alt=""></img></div>
                                <p className="article-title">Травмы</p>
                                <p>Проработка травматического опыта</p>
                            </div>
                            <div className="article-item">
                                <div className="img-box"><img src={pic1} className="article-img" alt="" /></div>
                                <p className="article-title">Отношения</p>
                                <p>Устранения созависимостей</p>
                            </div>
                            <div className="article-item">
                                <div className="img-box"><img src={pic2} className="article-img" alt="" /></div>
                                <p className="article-title">Финансы</p>
                                <p>Работа с материальным благополучием</p>
                            </div>

                        </div>

                    </article>
                </div>
                <SpecialOffer />
                <div className="container">
                    <AboutMe />
                    <Tarifs />
                    <HowWork />
                    <Faq />

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;