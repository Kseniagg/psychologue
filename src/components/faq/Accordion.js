import { useState } from "react";
import "./style.css";
import { BiChevronUp } from "react-icons/bi";

const Accordion = ({ title, content }) => {

    const [active, setActive] = useState(false);

    return (
        <>

            <div className="faq-container">
                <div className={active ? "faq active" : "faq"} >
                    <h4 className={active ? "faq-title active" : "faq-title"}>{title}</h4>
                    {active && <p className="faq-text">{content}</p>}
                    <button className={active ? "faq-toggle svg" : "faq-toggle"}
                        onClick={() => setActive(!active)}>
                        <BiChevronUp />
                    </button>
                </div>
            </div>

        </>
    )
}

export default Accordion;