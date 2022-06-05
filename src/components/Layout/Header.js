import classes from "./Header.module.css";
import foodImage from "../../assets/food.jpg";
import CartBtn from "./CartBtn";

function Header({ showCart }) {
    return (
        <>
            <header className={classes.header}>
                <h1>YummyMeals</h1>
                <CartBtn showCart={showCart} />
            </header>
            <div className={classes.hero} style={{ background: `url(${foodImage}) no-repeat center`, backgroundSize: "cover" }}>
            </div>
        </>

    )

}

export default Header;