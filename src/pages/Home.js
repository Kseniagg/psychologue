import Header from "../components/header/Header";
import Faq from "../components/faq/Faq";

const Home = () => {
    return (
        <>

            <Header />
            <section>
                <div className="container">
                    <div className="main-section">
                        <h1>Ольга Берген</h1>
                        <p>психолог</p>
                    </div>
                    <article>
                        <h2>Направления моей деятельности</h2>
                    </article>
                    <Faq />
                </div>
            </section>


        </>
    );
}

export default Home;