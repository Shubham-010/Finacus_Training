
import Uinput from '../hooks/use-input';



const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: NameValidahe, 
    NameInvalidhe: nameInputHasError,
    nameInputChangeHandler: nameChangeHandler,
    nameDaalNhitarBlur: nameBlurHandler,
    reset: resetNameInput,
  } = Uinput((value) => value.trim() !== "");
 
  const {
    value: enteredEmail,
    isValid: EmailValidahe,
    EmailInValidahe: EmailInvalid,
    emailInputChangeHandler: emailChangeHandler,
    emailDaalNhitarBlur: emailBlurHandler,
    reset: resetEmailInput,
  } = Uinput((value)=> value.includes('@'));

 
  let FormValid = false;
    if(NameValidahe && EmailValidahe){
      FormValid=true;
    } 


  
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    

    if(!NameValidahe && !EmailValidahe){
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  

  const CheckKarAndCSSBadal =  nameInputHasError
    ? "form-control  invalid"
    : "form-control"; 

  const CheckKarAndCSSBadal1 =EmailInvalid
  ? "form-control  invalid"
  : "form-control"; 

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={CheckKarAndCSSBadal}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Kuch to Daal Name me!!</p>}
      </div>
      <div className={CheckKarAndCSSBadal1}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {EmailInvalid && <p className="error-text">Kuch to Daal Email me!!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!FormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
