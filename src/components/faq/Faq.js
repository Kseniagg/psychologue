import React from "react";
import Accordion from "./Accordion";

const Faq = () => {


    const data = [
        {
            "question": "Сколько длится сессия ?",
            "response": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nobis, repellat neque non dict fugiat veritatis sit delectus perspiciatis quis?"
        },
        {
            "question": "Lorem ipsum dolor sit amet.",
            "response": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nobis, repellat neque non dicta fugiat veritatis sit delectus perspiciatis quis?"
        }
    ];

    return (
        <div className="section">
            <h3>Частые вопросы</h3>
            <div className="accordion">
                {data.map(({ question, response }, n) => (
                    <Accordion title={question} content={response} key={n} />
                ))}
            </div>
        </div>
    )
}

export default Faq;