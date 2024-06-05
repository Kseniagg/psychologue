import BtnBookTarifs from '../btnBook_tarifs/BtnBookTarifs';
import './style.css';

const HowWork = () => {
    return (
        <>
            {/* <h3>Как мы будем работать</h3> */}
            <h3>Comment je peux vous aider</h3>
            <div className="section-howwork">
                <div className="howwork_text">
                    {/*  <p>Вы оставляете заявку на сайте или сами связываетесь со мной</p>
                    <p>Знакомство и выяснение вашего запроса</p>
                    <p>Работа</p>
                    <p>Счастливая жизнь. Вы избавляетесь от проблемы и наслаждаетесь гармоничной жизнью</p> */}
                    <p>Vous reservez un creneau disponible</p>
                    <p>Première rencontre et l'élucidation de votre demande</p>
                    <p>Travail sur vos problematiques</p>
                    <p>Vous vous debarassez de vos problemes et savourez la vie</p>
                </div>
                <div className='howwork_btn'>
                    <BtnBookTarifs />
                </div>

            </div>
        </>
    );
};

export default HowWork;