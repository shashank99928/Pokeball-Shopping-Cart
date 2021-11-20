import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { useState, useContext, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Pokemon from './Pokemon.json';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    '& > *': {
      margin: theme.spacing(3),
    },
  },
  large: {
    '&:hover': {
      backgroundColor: 'gray',
      border: '1px solid red',
      width: theme.spacing(8),
      height: theme.spacing(8),
      cursor: 'ponter',
    },
  },
  styleSelectedPokemom: {
    backgroundColor: 'gray',
    border: '1px solid red',
    width: theme.spacing(8),
    height: theme.spacing(8),
    cursor: 'ponter',
  },
}));

function ChoosePokemon({ region = 'Jhoto' }) {
  const classes = useStyles();
  const ctx = useContext(CartContext);
  console.log('region', region);
  const [isSelected, setIsSlected] = useState(null);

  const selectPokemon = (event, isselected) => {
    let myPokemon = { pokemon: '', img: '' };
    if (isselected === 1) setIsSlected(1);
    if (isselected === 2) setIsSlected(2);
    if (isselected === 3) setIsSlected(3);
    myPokemon.pokemon = event.target.alt;
    myPokemon.img = event.target.src;
    console.log(event.target, isselected, isSelected, 'event.target');
    ctx.addPokemon({ pokemonName: event.target.alt, image: event.target.src });
  };

  useEffect(() => {
    setIsSlected(0);
  }, [region]);

  //isNaN(distance) ? (distance = 60) : distance;
  const selectedRegionArray = Pokemon.map((area) => area[region]);
  const selectPokemonList = selectedRegionArray[0];
  const selectPokemon1 = selectPokemonList[0];
  const selectPokemon2 = selectPokemonList[1];
  const selectPokemon3 = selectPokemonList[2];

  return (
    <div className={classes.root}>
      <Avatar
        className={`${classes.large} ${
          isSelected === 1 ? classes.styleSelectedPokemom : ''
        }`}
        key={selectPokemon1.name}
        alt={selectPokemon1.name}
        src={selectPokemon1.url}
        value={selectPokemon1.url}
        onClick={(event, isselected = 2) =>
          selectPokemon(event, (isselected = 1))
        }
        id={selectPokemon1.name}
      />
      <Avatar
        className={`${classes.large}  ${
          isSelected === 2 ? classes.styleSelectedPokemom : ''
        }`}
        key={selectPokemon2.name}
        alt={selectPokemon2.name}
        src={selectPokemon2.url}
        value={selectPokemon2.url}
        onClick={(event, isselected = 2) =>
          selectPokemon(event, (isselected = 2))
        }
        id={selectPokemon2.name}
      />
      <Avatar
        className={`${classes.large} ${
          isSelected === 3 ? classes.styleSelectedPokemom : ''
        }`}
        key={selectPokemon3.name}
        alt={selectPokemon3.name}
        src={selectPokemon3.url}
        value={selectPokemon3.url}
        onClick={(event, isselected = 3) =>
          selectPokemon(event, (isselected = 3))
        }
        id={selectPokemon3.name}
      />
    </div>
  );
}

export default ChoosePokemon;
