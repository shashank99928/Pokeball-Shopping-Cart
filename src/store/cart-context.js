import React from "react";

const CartContext = React.createContext({
  items: [],
  cart: [],
  addRegion: (region) => {},
  addItem: (item) => {},
  removeItem: (id) => {},
  addPokeball: (item) => {},
  addDistance: (distance) => {},
  addFullNameCode: (item) => {},
  addPokemon: (pokemon) => {}
});

export default CartContext;
