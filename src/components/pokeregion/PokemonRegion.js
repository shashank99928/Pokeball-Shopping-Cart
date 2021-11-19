import DropdownComponent from "../../common/DropdownComponent";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const PokemonRegion = () => {
  const ctx = useContext(CartContext);

  const placesInPokeWorld = [
    { id: 1, region: "kanto", distance: 60 },
    { id: 2, region: "Jhoto", distance: 80 },
    { id: 3, region: "Hoenn", distance: 100 }
  ];

  return (
    <DropdownComponent
      onPokemonRegion={placesInPokeWorld}
      onSelect={ctx.addRegion}
    />
  );
};

export default PokemonRegion;
