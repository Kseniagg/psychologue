import { useState } from "react";
import "./style.css";


const BtnBook = () => {

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
                <a href="https://dikidi.ru/#widget=138122" className="lien">Записаться <span>на</span> <span>консультацию</span></a>
            </button>

        </>
    )
};

export default BtnBook;

