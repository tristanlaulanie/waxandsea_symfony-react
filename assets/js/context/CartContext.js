import React, { createContext, useReducer, useContext } from "react";

// Création du contexte
const CartContext = createContext();

// Définir un reducer pour gérer les actions du panier
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex > -1) {
        const updatedCart = state.map((item, index) => 
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        return updatedCart;
      }
      return [...state, { ...action.payload, quantity: action.payload.quantity }];
    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

// Créer un fournisseur de contexte pour envelopper l'application
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook pour utiliser le contexte
export const useCart = () => useContext(CartContext);
