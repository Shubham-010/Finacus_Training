import './TCard.css';


function TCard(props){
    const classes ='TCard ' + props.className;
return(
    <div className={classes}>{props.children}</div>
)
}
export default TCard;