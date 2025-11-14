import quizComplete from '../assets/quiz-complete.png'

export default function ResultModal() {
    return (
        <>
            <div id="summary">
                <img src={quizComplete}/>
                <h2>QUIZ COMPLETED!</h2>
                <div id="summary-stats">
                    <ol>
                        <li><p className="number">10%</p></li>
                        <li><h3 className="text">skipped</h3></li>
                    </ol>
                    <p className="number">60%</p>
                    <p className="number">67%</p>
                </div>
            </div>

        </>
    )
}