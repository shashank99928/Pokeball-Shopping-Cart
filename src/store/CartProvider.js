import React, { useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: {
    region: { id: "2", name: "Jhoto", qty: 80 },
    distance: 60,
    nameAndCodde: { fullName: "Shashank Tripathi", codeName: "345" },
    pokemon: {
      pokemonName: "Cyndaquil",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png"
    }
  },
  cart: [{ id: 3, ballType: "Super Potion", ballQty: 21, hasBag: true }]
};

const cartReducer = (state, action) => {
  if (action.type === "ADDNAMEANDCODE") {
    let updateNameAndCode = { ...state.items };
    updateNameAndCode.nameAndCodde = action.item;
    return {
      ...state,
      items: updateNameAndCode
    };
  }
  if (action.type === "DISTANCE") {
    let updatedDistance = { ...state.items };
    updatedDistance.distance = action.distance;
    return {
      ...state,
      items: updatedDistance
    };
  }

  if (action.type === "REGION") {
    let updatedItems = { ...state.items };
    updatedItems.region = action.region;
    console.log("updatedItems", updatedItems);

    return {
      ...state,
      items: updatedItems
    };
  }

  if (action.type === "ADDPOKEMON") {
    console.log(action.pokemon);
    let updatedPokemon = { ...state.items };
    updatedPokemon.pokemon = action.pokemon;
    console.log("updatedPokemon", updatedPokemon);
    return {
      ...state,
      items: updatedPokemon
    };
  }

  if (action.type === "ADDPOKEBALL") {
    let existingItemIndex = state.cart.findIndex(
      (item) => item.id === action.item.id
    );
    console.log(existingItemIndex);

    let updatedCart;
    if (existingItemIndex === -1) {
      updatedCart = [...state.cart, action.item];
    } else {
      let updateExistingItem = [...state.cart];
      updateExistingItem[existingItemIndex] = action.item;
      updatedCart = updateExistingItem;
    }
    return {
      ...state,
      cart: updatedCart
    };
  }

  if (action.type === "REMOVEITEM") {
    let updatQtyIndex = state.cart.findIndex((item) => item.id === action.id);
    const existingItem = state.cart[updatQtyIndex];
    let updatedItems;
    let updatedItem = {
      ...existingItem,
      ballQty: existingItem.ballQty - 1
    };
    updatedItems = [...state.cart];
    updatedItems[updatQtyIndex] = updatedItem;

    return { ...state, cart: updatedItems };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [cartState, dispatchCartActions] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addFullNameCodeHandler = (item) => {
    dispatchCartActions({ type: "ADDNAMEANDCODE", item: item });
  };

  const addDistanceHandler = (distance) => {
    dispatchCartActions({ type: "DISTANCE", distance: distance });
  };

  const addRegionHandler = (region) => {
    console.log(region);

    dispatchCartActions({ type: "REGION", region: region });
  };

  const addPokemonHandler = (pokemon) => {
    dispatchCartActions({ type: "ADDPOKEMON", pokemon: pokemon });
  };

  const addItemHandler = (item) => {
    dispatchCartActions({ type: "ADDITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartActions({ type: "REMOVEITEM", id: id });
  };

  const addPokeballHandler = (item) => {
    dispatchCartActions({ type: "ADDPOKEBALL", item: item });
  };

  const hasSubmittedHandler = () => {
    setHasSubmitted(true);
  };
  console.log("cartState", cartState);

  const cartContext = {
    addFullNameCode: addFullNameCodeHandler,
    addDistance: addDistanceHandler,
    addRegion: addRegionHandler,
    addPokeball: addPokeballHandler,
    items: cartState.items,
    cart: cartState.cart,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    addPokemon: addPokemonHandler,
    hasSubmitted: hasSubmittedHandler,
    hasSubmittedState: hasSubmitted
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
