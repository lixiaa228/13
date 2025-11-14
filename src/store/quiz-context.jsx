import { createContext } from "react";

export const QuizContext = createContext({
    isStartedQuiz: false,
    isFinishedQuiz: false,
    setIsStartedQuiz: () => {},
    setIsFinishedQuiz: () => {},
})