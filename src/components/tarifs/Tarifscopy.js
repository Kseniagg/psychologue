import BtnBookTarifs from "../btnBook_tarifs/BtnBookTarifs";
import './style.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Scelet from "./Scelet";

const Tarifs = () => {

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    {/* <div className="item" data-value="1">1</div>,
        <div className="item" data-value="2">2</div>,
        <div className="item" data-value="3">3</div>,
        <div className="item" data-value="4">4</div>,
        <div className="item" data-value="5">5</div>, */}
    const items = [

        <Scelet className="item" data-value="4" />

    ];

    return (
        <div className="section tarifs">
            <h3>Тарифы и услуги</h3>
            <div>

                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                />
            </div>
        </div>



    );
};

export default Tarifs;