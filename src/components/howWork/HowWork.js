import BtnBookTarifs from '../btnBook_tarifs/BtnBookTarifs';
import './style.css';

const HowWork = () => {
    return (
        <>
            <h3>Как мы будем работать</h3>
            <div className="section-howwork">
                <div className="howwork_text">
                    <p>Вы оставляете заявку на сайте или сами связываетесь со мной</p>
                    <p>Знакомство или выяснение вашего запроса</p>
                    <p>Работа</p>
                    <p>Счастливая жизнь. Вы избавляетесь от проблемы и наслаждаетесь гармоничной жизнью</p>
                </div>
                <div className='howwork_btn'>
                    <BtnBookTarifs />
                </div>

            </div>
        </>
    );
};

export default HowWork;