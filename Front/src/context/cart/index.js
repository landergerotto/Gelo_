import React, { useState } from "react";

export const CartContext = React.createContext();
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart (item)
  {
    var founde = false
    cart.forEach(element => {
        if (element._id == item._id)
            founde = true;
    });
    if (founde == true)
        return;
    setCart(oldCart => [...oldCart, item]);
  }

  // fazer por id?
  function removeFromCart (item)
  {
    setCart(cart.filter(obj => item !== obj));
  }

  return (

    <CartContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
    
  );
};
