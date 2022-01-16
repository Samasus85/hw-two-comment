import './Comment.css';
import UserInfo from '../Users/UserInfo';
import Footer from '../Footers/Footer'


function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo author={props.author} />
            <Footer text={props.text} date={props.date} />

        </div>

    )
}

export default Comment;