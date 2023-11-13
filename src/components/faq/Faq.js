import { useState, useRef } from "react";
import "./style.css";
import { data } from "./data.js";
import { BiChevronDown } from "react-icons/bi";

const Faq = () => {
    const [faq, setFaq] = useState(data);
    const [active, setActive] = useState("faq");

    const contentRef = useRef(null);

    const handleChange = () => {
        const n = contentRef.current.style = active === "faq" ? "faq active" : "faq";
        setActive(n);
    }

    return (
        <>
            <h1>Frequently Asked Questions</h1>
            <div className="faq-container">
                {faq.map((f, i) => (
                    <div className={active} key={i} ref={contentRef}>
                        <h3 className="faq-title">
                            {f.q}
                        </h3>
                        <p className="faq-text">{f.r}</p>
                        <button className="faq-toggle"
                            onClick={() => handleChange(f.id)}>
                            <BiChevronDown />
                        </button>
                    </div>
                ))}
            </div >
        </>
    )
}

export default Faq;