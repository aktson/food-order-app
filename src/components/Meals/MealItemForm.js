import Input from "../UI/Input"
import classes from "./MealItemForm.module.css"
import { useRef, useState } from "react";

function MealItemForm({ onAddToCart }) {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }
        onAddToCart(enteredAmountNumber)

    }

    return (
        <form onSubmit={handleSubmit}>
            <Input label="Quantity"
                ref={amountInputRef}
                input={{
                    id: "Quantity",
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }} />
            <button className={classes.addBtn}>Add</button>
            {!amountIsValid && <p>Please enter valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm