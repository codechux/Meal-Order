import CartContext from "./cartContext";

const CartProvider = (props) => {
  const addItemToCart = (item) => {};
  const remoevItemFromCart = (id) => {};

  const cartContext = {
    item: [],
    totalItem: 0,
    addItem: addItemToCart,
    removeItem: remoevItemFromCart,
  };
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;
