import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";


function App() {


  const [cartIsShown, setCartIsShown] = useState(false);

  function showCart() {
    setCartIsShown(true)
  }
  function hideCart() {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      <Header showCart={showCart} />
      {cartIsShown && <Cart hideCart={hideCart} />}
      <Main />
      <Footer />
    </CartProvider>
  );
}

export default App;
