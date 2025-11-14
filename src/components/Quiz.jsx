import questions from "../../../../questions.js";
import {useContext, useEffect, useReducer, useState} from "react";
import '../index.css'
import {QuizContext} from "../store/quiz-context.jsx";


export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const {isStartedQuiz, finishQuiz} = useContext(QuizContext);

    useEffect(() => {
        if (questions.length === 0) return;

        setCurrentQuestion(questions[0]);

        let idx = 1;
        const id = setInterval(() => {

            if (idx >= questions.length) {
                finishQuiz()
                setCurrentQuestion(0)
                clearInterval(id);
                return;
            }

            setCurrentQuestion(questions[idx]);
            idx++;
        }, 1000);


        return () => clearInterval(id);

    }, []);
    const content =  <div id="quiz">
        <progress max="100" value="70"></progress>
        <h2 id="question">{currentQuestion.text}</h2>
        <div id="answers">
            {currentQuestion && currentQuestion.answers.map((item, index) => (
                <button className="answer" key={index}>{item}</button>
            ))}
        </div>
    </div>


    return (  currentQuestion !== 0 && content )

}