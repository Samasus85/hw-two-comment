
import './Date.css'
function Date(props) {
    const month = props.date.toLocaleString('en-Us', { month: 'long' })
    const day = props.date.toLocaleString('en-Us', { day: '2-digit' })
    const year = props.date.getFullYear()
    return (
        <div className="date">
            <div>{day}  {month}  {year}</div>
        </div>
    )
}
export default Date;