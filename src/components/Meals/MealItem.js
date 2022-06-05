import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

function MealItem({ name, description, price, id }) {

    const cartCtx = useContext(CartContext);

    function addToCartHandler(amount) {

        cartCtx.addItem({
            id: id,
            name: name,
            price: price,
            amount: amount
        })

    }


    const priceFixed = `$${price.toFixed(2)}`
    return (
        <li className={classes.mealItem}>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{priceFixed}</p>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem