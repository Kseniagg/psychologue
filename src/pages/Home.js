import Header from "../components/header/Header";
import BtnBook from "../components/btnBook/BtnBook";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";
import AboutMe from "../components/aboutMe/AboutMe";
import Tarifs from "../components/tarifs/Tarifs";
import Tarifscopy from "../components/tarifs/Tarifscopy.js";
import "./style.css";
import pic1 from "../img/relationships.png";
import pic2 from "../img/money.png";
import pic3 from "../img/insomnia.png";



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
                        <BtnBook />

                    </div>
                </div>


                <div className="container">
                    <article className="section-mywork">
                        <h3>Направления моей деятельности</h3>
                        <div className="article-mywork">
                            <div className="article-item">
                                <img src={pic1} className="article-img" alt="" />
                                <p className="article-title">Отношения</p>
                                <p>Устранения созависимостей</p>
                            </div>
                            <div className="article-item">
                                <img src={pic2} className="article-img" alt="" />
                                <p className="article-title">Отношения</p>
                                <p>Устранения созависимостей</p>
                            </div>
                            <div className="article-item">
                                <img src={pic3} className="article-img" alt=""></img>
                                <p className="article-title">Отношения</p>
                                <p>Устранения созависимостей</p>
                            </div>
                        </div>

                    </article>
                    <AboutMe />
                    <Tarifs />
                    <Faq />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;