import BtnBookTarifs from '../btnBook_tarifs/BtnBookTarifs';
import './style.css';

const HowWork = () => {
    return (
        <>
            {/* <h3>Как мы будем работать</h3> */}
            <h3>Comment je vous aide</h3>
            <div className="section-howwork">
                <div className="howwork_text">
                    {/*  <p>Вы оставляете заявку на сайте или сами связываетесь со мной</p>
                    <p>Знакомство или выяснение вашего запроса</p>
                    <p>Работа</p>
                    <p>Счастливая жизнь. Вы избавляетесь от проблемы и наслаждаетесь гармоничной жизнью</p> */}
                    <p>Vous reservez un creneau disponible</p>
                    <p>Première rencontre et l'élucidation votre demande</p>
                    <p>Работа</p>
                    <p>La vie heureuse. Vous vous debarassez des problemes et savourez la vie</p>
                </div>
                <div className='howwork_btn'>
                    <BtnBookTarifs />
                </div>

            </div>
        </>
    );
};

export default HowWork;