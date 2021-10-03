import './TimeDate.css';



function Timedate(props){
    const month=props.Date1.toLocaleString('en-US', {month: 'long' });
    const year=props.Date1.getFullYear();
    const days=props.Date1.toLocaleString('en-US', {day: '2-digit' });
return(
    <div className="datess">
        <div className="Timedate_Year">{month}</div>
        <div className="Timedate_Month">{year}</div>
        <div className="Timedate_Day">{days}</div>
        
        </div>
);
}
export default Timedate;