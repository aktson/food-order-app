import React from 'react'
import classes from "./CartItem.module.css";

function CartItem({ name, price, amount, decreaseItem, increaseItem }) {
    return (
        <li className={classes.listItem}>
            <div className={classes.itemContainer}>
                <h3>{name}</h3>
                <div className={classes.priceAndQuantityContainer}>
                    <span>{amount} x </span>
                    <span>{price}</span>

                </div>
            </div>
            <div className={classes.buttonsContainer}>
                <button className={classes.minusBtn} onClick={decreaseItem}>-</button>
                <button className={classes.plusBtn} onClick={increaseItem}>+</button>
            </div>
        </li>
    )
}

export default CartItem;