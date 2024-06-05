import { useState } from "react";
import "./style.css";


const BtnBookTarifs = () => {

    const [activatedBtn, setActivatedBtn] = useState(false);

    return (
        <>

            {/* {
                activatedBtn &&
                <div className="pop-up">
                    <div className="background"></div>
                    <div className="pop_selectBtn">
                        <p>Heeey</p>
                        <button
                            onClick={() => setActivatedBtn(false)}>
                            X
                        </button>
                    </div>
                </div>
            } */}

            <button className="btn-action"
                onClick={() => setActivatedBtn(!false)}>
                {/* <a href="https://dikidi.ru/#widget=138122" className="lien">Записаться</a> */}
                <a href="https://dikidi.ru/#widget=138122" className="lien">Reserver</a>
            </button>

        </>
    )
};

export default BtnBookTarifs;

