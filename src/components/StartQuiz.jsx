import Button from './Button';
import { useContext, useState } from 'react'
import { QuizContext } from "../store/quiz-context.jsx";
import Quiz from './Quiz.jsx'

export default function StartQuiz() {
    const { isStartedQuiz, startQuiz } = useContext(QuizContext);

    return (
        <>
            {isStartedQuiz ? <Quiz/> : <Button onClick={startQuiz}>Start Quiz</Button>}
        </>
    )
}