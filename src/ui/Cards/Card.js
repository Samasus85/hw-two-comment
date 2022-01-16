import './Card.css';



function Card(props) {
    let classes = 'Card '
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;