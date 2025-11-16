export default function StatsGroup( props) {
    return (
        <div>
            <p className="number">{props.percents }%</p>
            <p className="text">{props.text}</p>
        </div>
    )
}