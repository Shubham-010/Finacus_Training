import QuoteList from '../components/quotes/QuoteList';
const Dummy_Quotes = [
    {id:'q1',author: 'Max', text:'Learning React is Fun!'},
    {id:'q2',author: 'Sam', text:'Learning React is Cool!'},

];

const AllQuotes=()=>{
return <QuoteList quotes={Dummy_Quotes}/>
};
export default AllQuotes;