import React, { createContext, useState } from 'react';
import { updatePackageCupos } from '../utils/updatedate';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  
const addToCart = async (item) => {
  
  console.log(item.id)

  try {
    // Llamar a la función updateCupos antes de agregar el paquete al carrito
    updatePackageCupos(item.id, item.cupos);
    setCartItems([...cartItems, item]);
    alert('Producto agregado correctamente al carrito');
  } catch (error) {
    console.log('Error al agregar el producto al carrito:', error);
  }
};

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
