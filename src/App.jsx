import StartQuiz from "./components/StartQuiz.jsx";
import Header from "./components/Header.jsx";
import './index.css';
import { useState } from 'react'
import { QuizContext } from "./store/quiz-context.jsx";
import ResultModal from "./components/ResultModal.jsx";


function App() {

    const [ isStartedQuiz, setIsStartedQuiz ] = useState(false);
    const [ isFinishedQuiz, setIsFinishedQuiz ] = useState(false);

    function startQuiz() {
        setIsStartedQuiz( true)
    }
    function finishQuiz() {
        setIsFinishedQuiz( true)
    }

    return (
        <div>
            <Header/>
            <QuizContext.Provider value={ { isStartedQuiz, isFinishedQuiz, startQuiz, finishQuiz } }>
                <StartQuiz/>
                { (isStartedQuiz && isFinishedQuiz) && <ResultModal /> }
            </QuizContext.Provider>

        </div>
    )
}

export default App;
