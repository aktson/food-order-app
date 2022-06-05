import classes from "./CartBtn.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

function CartBtn({ showCart }) {

    const cartContext = useContext(CartContext);

    const numberOfItemsInCart = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    return (
        <button className={classes.cartBtn} onClick={showCart}>
            <span><FaShoppingCart /></span>
            <span>Your Cart</span>
            <span className={classes.cartQuantity}>{numberOfItemsInCart}</span>
        </button>
    )
}

export default CartBtn