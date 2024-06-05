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
            {/* <p className="tarifs_item_name"><strong>Диагностика</strong></p> */}
            <p className="tarifs_item_name"><strong>Diagnostic</strong></p>
            <p>Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem
                ipsum ipsum lorem ipsum ipsum lorem
            </p>
            <div className="tarifs_item_book">
                <p>40 min <span>Gratuit</span></p>
                <BtnBookTarifs />
            </div>
        </div>,
        <div className="tarifs_item item" data-value="2">
            {/*  <p className="tarifs_item_name"><strong>Личная консультация</strong></p> */}
            <p className="tarifs_item_name"><strong>Consultation personnelle</strong></p>
            <p>Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem
                ipsum ipsum lorem ipsum ipsum lorem
            </p>
            <div className="tarifs_item_book">
                <p>40 min <span>Gratuit</span></p>
                <BtnBookTarifs />
            </div>
        </div>,
        <div className="tarifs_item item" data-value="3">
            {/* <p className="tarifs_item_name"><strong>Консультация для пары</strong></p> */}
            <p className="tarifs_item_name"><strong>Consultation de couple</strong></p>
            <p>Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem
                ipsum ipsum lorem ipsum ipsum lorem
            </p>
            <div className="tarifs_item_book">
                <p>40 min <span>Gratuit</span></p>
                <BtnBookTarifs />
            </div>
        </div>,
        <div className="tarifs_item item" data-value="4">
            {/* <p className="tarifs_item_name"><strong>Пакет консультаций</strong></p> */}
            <p className="tarifs_item_name"><strong>Pack de consultations</strong></p>
            <p>Lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem
                ipsum ipsum lorem ipsum ipsum lorem
            </p>
            <div className="tarifs_item_book">
                <p>40 min <span>50€</span></p>
                <BtnBookTarifs />
            </div>
        </div>,

    ];

    return (
        <div className="section tarifs" id="prices-section">
            {/* <h3>Тарифы и услуги</h3> */}
            <h3>Prix et services</h3>
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