import {useState} from "react";

const Uinput=(validateValue)=>{
    const [enteredName, setEnteredName] = useState("");
    const [FormlaTouchkele, setFormlaTouchkele]=useState(false);

    const NameValidahe = validateValue(enteredName);
  const NameInvalidhe = !NameValidahe && FormlaTouchkele;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

  };
  const nameDaalNhitarBlur = event =>{
    setFormlaTouchkele(true);
 };

 const reset =() =>{
     setEnteredName('');
     setFormlaTouchkele(false);
 }
return {
  value: enteredName,
  isValid: NameValidahe,
  NameInvalidhe: NameInvalidhe,
  nameInputChangeHandler,
  nameDaalNhitarBlur,
  reset
};
};
export default Uinput;