import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

export default function Checkout(props) {
  let nameInputRef = useRef();
  let streetInputRef = useRef();
  let pCodeInputRef = useRef();
  let cityInputRef = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    pCode: true,
    city: true
  });

  const confirmHandler = e => {
    e.preventDefault();

    let enteredName = nameInputRef.current.value;
    let enteredStreet = streetInputRef.current.value;
    let enteredPCode = pCodeInputRef.current.value;
    let enteredCity = cityInputRef.current.value;

    console.log(enteredName);
    console.log(enteredStreet);
    console.log(enteredPCode);
    console.log(enteredCity);



    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPCodeIsValid = !isEmpty(enteredPCode);


    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      pCode: enteredPCodeIsValid,
      city: enteredCityIsValid,
    });


    const formIsValid = 
    enteredNameIsValid && 
    enteredStreetIsValid &&
    enteredPCodeIsValid &&
    enteredCityIsValid;
 
    if(!formIsValid){
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      pCode: enteredPCode,
      city: enteredCity,
    });

  }

  const isEmpty = val => {
    return val.trim() === "";
  };

  const isNotFiveChars = val => {
      if(val.length <= 4){
        return false;
      }

      return val;
  };

  const nameValid = formInputsValidity.name ? classes.control : `${classes.control} ${classes.invalid}`;
  const streetIsValid = formInputsValidity.street ? classes.control : `${classes.control} ${classes.invalid}`;
  const pCodeIsValid = formInputsValidity.pCode ? classes.control : `${classes.control} ${classes.invalid}`;
  const cityIsValid = formInputsValidity.city ? classes.control : `${classes.control} ${classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameValid}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef}/>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetIsValid}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}/>
        {!formInputsValidity.street && <p>Please enter a valid street name!</p>}
      </div>
      <div className={pCodeIsValid}>
        <label htmlFor="pcode" >Postal Code</label>
        <input type="text" id="pcode" ref={pCodeInputRef}/>
        {!formInputsValidity.pCode && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={cityIsValid}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}/>
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
}
