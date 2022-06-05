import React from 'react'
import Modal from '../UI/Modal'
import classes from "./Cart.module.css"
import { useContext } from "react";
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

function Cart({ hideCart }) {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const isCartNotEmpty = cartCtx.items.length > 0;

    function increaseItem(item) {
        cartCtx.addItem({ ...item, amount: 1 })

    }
    function decreaseItem(id) {
        cartCtx.removeItem(id)
    }

    const cartItems =
        <ul className={classes.cartUl}>
            {cartCtx.items.map(item =>

                < CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    increaseItem={increaseItem.bind(null, item)}
                    decreaseItem={decreaseItem.bind(null, item.id)} />
            )}
        </ul>
    return (

        <Modal hideCart={hideCart}>
            {cartItems}
            <div className={classes.totalContainer}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.btnContainer}>
                <button className={classes.closeBtn} onClick={hideCart}>Close</button>
                {isCartNotEmpty && <button className={classes.orderBtn}>Order</button>}
            </div>
        </Modal>

    )
}

export default Cart