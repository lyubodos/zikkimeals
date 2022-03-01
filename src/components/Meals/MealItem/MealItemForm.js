import {useRef, useState}from 'react';
import Input from '../../UI/Input/Input';

import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const inputAmount = useRef()

    const submitHanlder = e => {
        e.preventDefault();

        const enteredAmount = inputAmount.current.value;
        const enteredAmountNum = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNum);
    }

    return (
        <form className={classes.form} onSubmit={submitHanlder}>
            <Input label="Amount" ref={inputAmount} input={{
                id: props.id,
                type: "number",
                min: '1',
                max: '5',
                step: '1',
                defaultValue: "1"
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1 to 5)</p>}
        </form>
    )
}
