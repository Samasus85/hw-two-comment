import './Footer.css'
import Date from '../Date/Date';
const Footer = (props) => {
    return (
        <div className='Footer'>
            <div className="Comment-text">{props.text}</div>
            <Date date={props.date} />
        </div>
    )
}

export default Footer; 