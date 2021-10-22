
import Uinput from "../hooks/use-input";

const isnotEmpty = value=> value.trim() !== '';
const isEmail = value=> value.includes('@');



const BasicForm = (props) => {
const{
value: FirstNameValue,
isValid: FirstNameIsValid,
haserror: FirstNamehasError,
valueChangeHandler: FirstNameChangeHandler,
inputBlurHandler: FirstNameBlurHandler,
reset: resetFirstName,

  }=Uinput(isnotEmpty);
const{
value: LastNameValue,
isValid: LastNameIsValid,
haserror: LastNamehasError,
valueChangeHandler: LastNameChangeHandler,
inputBlurHandler: LastNameBlurHandler,
reset: resetLastName,

  }=Uinput(isnotEmpty);
const{
value: emailValue,
isValid: emailIsValid,
haserror: EmailhasError,
valueChangeHandler: emailChangeHandler,
inputBlurHandler: emailBlurHandler,
reset: resetEmail,

  }=Uinput(isEmail);

let FormisValid = false;

if(FirstNameIsValid && LastNameIsValid && emailIsValid){
  FormisValid = true;

  if(!FormisValid){
    return;
  }
  console.log('Submitted');
  console.log(FirstNameValue,LastNameValue,emailValue);

  resetFirstName();
  resetLastName();
  resetEmail();
};

const submitHandler = event =>{
  event.preventDefault();
}
  const FirstNameClasses = FirstNamehasError ? 'form-control invalid':'form-control';
  const LastNameClasses = LastNamehasError ? 'form-control invalid':'form-control';
  const EmailClasses = EmailhasError ? 'form-control invalid':'form-control';

  

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
      <div className={FirstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            haserror={FirstNamehasError}
            value={FirstNameValue}
            onChange={FirstNameChangeHandler}
            onBlur={FirstNameBlurHandler}
          />
          {FirstNameIsValid && <p>First Name Invalid</p>}
        </div>
        <div className={LastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            haserror={LastNamehasError}
            value={LastNameValue}
            onChange={LastNameChangeHandler}
            onBlur={LastNameBlurHandler}
          />
          {LastNameIsValid && <p>Last Name Invalid</p>}
        </div>
      </div>
      <div className={EmailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          haserror={EmailhasError}
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsValid && <p> email Invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!FormisValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
