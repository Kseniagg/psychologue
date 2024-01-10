import BtnBookTarifs from '../btnBook_tarifs/BtnBookTarifs';
import './style.css'

const SpecialOffer = () => {


    return (
        <div className='section_specialoffer'>
            <div className='container specialoffer'>
                <div className='section_sploffer_text'>
                    <p>Давайте познакомимся?</p>
                    <p>первая консультация бесплатно</p>
                </div>
                <div className='section_sploffer_btn'>
                    < BtnBookTarifs />
                </div>
            </div>

        </div>
    )
};

export default SpecialOffer;