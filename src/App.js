import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartActive, setIsCartActive] = useState(false);

  const showCartHandler = () => {
    setIsCartActive(true);
  };
  const closeCartHandler = () => {
    setIsCartActive(false);
  };

  return (
    <>
      <CartProvider>
        {isCartActive && <Cart onClose={closeCartHandler} />}
        <Header onShow={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </>
  );
}

export default App;
