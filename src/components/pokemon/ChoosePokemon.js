import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(3)
    }
  },
  large: {
    "&:hover": {
      backgroundColor: "light-gray",
      border: "1px solid red",
      width: theme.spacing(8),
      height: theme.spacing(8)
    }
  }
}));

const Pokemon = [
  {
    kanto: [
      {
        name: "Bulbasaur",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
      },
      {
        name: "Charmander",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png "
      },
      {
        name: "Squirtle",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
      }
    ],
    Jhoto: [
      {
        name: "Chikorita",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png"
      },
      {
        name: "Cyndaquil",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png"
      },
      {
        name: "Totodile",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png"
      }
    ],
    Hoenn: [
      {
        name: "Treecko",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png"
      },
      {
        name: "Torchic",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png"
      },
      {
        name: "Mudkip",
        url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png"
      }
    ]
  }
];

function ChoosePokemon({ region = "Jhoto" }) {
  const classes = useStyles();
  const ctx = useContext(CartContext);
  console.log("region", region);

  const [addStyles, setStyles] = useState(false);

  const selectPokemon = (event) => {
    let myPokemon = { pokemon: "", img: "" };
    myPokemon.pokemon = event.target.alt;
    myPokemon.img = event.target.src;
    ctx.addPokemon({ pokemonName: event.target.alt, image: event.target.src });

    setStyles(true);
  };

  //isNaN(distance) ? (distance = 60) : distance;

  return (
    <div className={classes.root}>
      {Pokemon.map((area) => {
        return area[region].map((index) => (
          <Avatar
            className={addStyles ? classes.large : null}
            key={index.name}
            alt={index.name}
            src={index.url}
            value={index.url}
            onMouseEnter={(event) => selectPokemon(event)}
            id={index.name}
          />
        ));
      })}
    </div>
  );
}

export default ChoosePokemon;
