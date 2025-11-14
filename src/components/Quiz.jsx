import questions from "../../../../questions.js";
import {useEffect, useReducer, useState} from "react";
import '../index.css'


export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        if (questions.length === 0) return;

        setCurrentQuestion(questions[0]);

        let idx = 1;
        const id = setInterval(() => {

            if (idx >= questions.length) {
                clearInterval(id);
                return;
            }

            setCurrentQuestion(questions[idx]);
            idx++;
        }, 5000);

        return () => clearInterval(id);
    }, []);


    return (
        <div id="quiz">
            <progress max="100" value="70"></progress>
            <h2 id="question">{questions[0].text}</h2>
            <div id="answers">
                {questions[0].answers.map((item, index) => (
                    <button className="answer" key={index}>{item}</button>
                ))}
            </div>

        </div>
    )
}