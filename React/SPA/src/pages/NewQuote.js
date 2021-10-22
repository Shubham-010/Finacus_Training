import QuoteForm from "../components/quotes/QuoteForm";


const NewQuote=()=>{
    const addQuotesHandler = quoteData =>{
        console.log(quoteData);
    };

    return(<QuoteForm  onAddQuote={addQuotesHandler} />
        )
    };
    export default NewQuote;