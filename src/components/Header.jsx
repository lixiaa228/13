import quizLogo from '../assets/quiz-logo.png'
import '../index.css';


export default function Header() {
    return (
        <header className="flex flex-col items-center ">
            <img src={quizLogo} alt="quiz logo"/>
            <h1 className="pt-4">REACTQUIZ</h1>
        </header>
    )
}