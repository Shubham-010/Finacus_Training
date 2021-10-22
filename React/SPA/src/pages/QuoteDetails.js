import { useParams,Route } from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';


const Dummy_Quotes = [
    {id:'q1',author: 'Max', text:'Learning React is Fun!'},
    {id:'q2',author: 'Sam', text:'Learning React is Cool!'},

];

const QuoteDetails=()=>{
    const params = useParams();

    const quote= Dummy_Quotes.find(quote => quote.id === params.quoteId);
    return (
      <div>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`/quotes/${params.quoteId}/comments`}></Route>
        <Comments/>
      </div>
    );
    };
    export default QuoteDetails;