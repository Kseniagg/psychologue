import Header from "../components/header/Header";
import BtnBook from "../components/btnBook/BtnBook";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";
import AboutMe from "../components/aboutMe/AboutMe";
import "./style.css";
import pic from "../img/work.jpg";


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
                    <article className="section">
                        <h3>Направления моей деятельности</h3>
                        <div className="article-mywork">
                            <div className="article-item">
                                <img src={pic} className="article-img" alt="" />
                                <p className="article-title">Отношения</p>
                                <p>Устранения созависимостей</p>
                            </div>
                            <div className="article-item">
                                <img src={pic} className="article-img" alt="" />
                                <p className="article-title">Отношения</p>
                                <p>Устранения созависимостей</p>
                            </div>
                            <div className="article-item">
                                <img src={pic} className="article-img" alt=""></img>
                                <p className="article-title">Отношения</p>
                                <p>Устранения созависимостей</p>
                            </div>
                        </div>

                    </article>
                    <AboutMe />
                    <Faq />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;