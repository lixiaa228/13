import quizComplete from '../assets/quiz-complete.png'
import StatsGroup from "./StatsGroup.jsx";

export default function ResultModal() {
    return (
        <>
            <div id="summary">
                <img src={quizComplete}/>
                <h2>QUIZ COMPLETED!</h2>
                <div id="summary-stats">

                    <StatsGroup percents="60" text="skipped"/>
                    <StatsGroup percents="59" text="answered correctly"/>
                    <StatsGroup percents="45" text="answered incorrectly"/>


                </div>
            </div>

        </>
    )
}