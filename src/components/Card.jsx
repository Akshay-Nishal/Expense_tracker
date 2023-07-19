import './Card.css'
const Card = (props) =>{
    const classes = 'card '+props.className
    const idd = props.id
    return <div id={idd} className={classes}>{props.children}</div>
}

export default Card