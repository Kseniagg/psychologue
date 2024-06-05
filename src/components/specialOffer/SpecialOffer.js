import BtnBookTarifs from '../btnBook_tarifs/BtnBookTarifs';
import './style.css'

const SpecialOffer = () => {


    return (
        <div className='section_specialoffer'>
            <div className='container specialoffer'>
                <div className='section_sploffer_text'>
                    {/* <p>Давайте познакомимся?</p>
                    <p><span>первая консультация бесплатно</span></p> */}
                    <p>On va se connaitre ?</p>
                    <p><span>la première consultation est gratuit</span></p>
                </div>
                <div className='section_sploffer_btn'>
                    < BtnBookTarifs />
                </div>
            </div>

        </div>
    )
};

export default SpecialOffer;