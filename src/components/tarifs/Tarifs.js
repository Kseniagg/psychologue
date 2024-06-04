import BtnBookTarifs from "../btnBook_tarifs/BtnBookTarifs";
import './style.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Tarifs = () => {


    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="tarifs_item item" data-value="1" >
            <p className="tarifs_item_name"><strong>Диагностика</strong></p>
            <p>Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem
                ipsum ipsum lorem ipsum ipsum lorem
            </p>
            <div className="tarifs_item_book">
                <p>40 мин <span>Бесплатно</span></p>
                <BtnBookTarifs />
            </div>
        </div>,
        <div className="tarifs_item item" data-value="2">
            <p className="tarifs_item_name"><strong>Личная консультация</strong></p>
            <p>Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem
                ipsum ipsum lorem ipsum ipsum lorem
            </p>
            <div className="tarifs_item_book">
                <p>40 мин <span>Бесплатно</span></p>
                <BtnBookTarifs />
            </div>
        </div>,
        <div className="tarifs_item item" data-value="3">
            <p className="tarifs_item_name"><strong>Консультация для пары</strong></p>
            <p>Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem
                ipsum ipsum lorem ipsum ipsum lorem
            </p>
            <div className="tarifs_item_book">
                <p>40 мин <span>Бесплатно</span></p>
                <BtnBookTarifs />
            </div>
        </div>,
        <div className="tarifs_item item" data-value="4">
            <p className="tarifs_item_name"><strong>Пакет консультаций</strong></p>
            <p>Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem
                ipsum ipsum lorem ipsum ipsum lorem
            </p>
            <div className="tarifs_item_book">
                <p>40 мин <span>5 000 руб</span></p>
                <BtnBookTarifs />
            </div>
        </div>,

    ];

    return (
        <div className="section tarifs" id="prices-section">
            <h3>Тарифы и услуги</h3>
            <div className="tarifs_bloc">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="default"
                />
            </div>
        </div>
    );
};

export default Tarifs;