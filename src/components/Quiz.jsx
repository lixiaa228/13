import questions from '../../../questions.js'
import {useContext, useEffect, useState, useRef} from "react";
import '../index.css'
import {QuizContext} from "../store/quiz-context.jsx";


export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [summaryStats, setSummaryStats] = useState([...questions])
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
        }, 5000);


        return () => clearInterval(id);

    }, []);

    function updateSummaryStats(currentQuestion, item) {

        //
        // setSummaryStats(prevSummaryStats => ({
        //         ...prevSummaryStats,
        //         [currentQuestion.id]: {
        //             text: currentQuestion.text,
        //             answer: item,
        //         }
        //     }))

        // setSummaryStats(prevSummaryStats => ({
        //         ...prevSummaryStats,
        //         [currentQuestion.id]: {
        //           ...prevSummaryStats,
        //             answer: item,
        //     }})
        // )
        setSummaryStats(prevSummaryStats =>
            prevSummaryStats.map(i =>
                i.id === currentQuestion.id
                    ? { ...i, answer: item }
                    : i
            )
        );

        item === currentQuestion.correct_answer ? event.target.classList.add('correct') : event.target.classList.add('wrong')

    }

    console.log(summaryStats)

    const content = <div id="quiz">
        <progress max="100" value="70"></progress>
        <div id="question">
            <h2>{currentQuestion.text}</h2>
            <div id="answers">
                {currentQuestion && currentQuestion.answers.map((item) => (
                    <div key={item} className="answer">
                        <button onClick={() => updateSummaryStats(currentQuestion, item)}>{item}</button>
                    </div>
                ))}
            </div>
        </div>
    </div>

    return (currentQuestion !== 0 && content)

}