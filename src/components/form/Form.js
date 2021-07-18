import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TitleComponent from "../../utils/TitleComponent";
import ParagraphComponent from "../../utils/ParagraphComponent";
import ButtonComponent from "../../utils/ButtonComponent";
import useInput from "../hooks/use-input";
import ProgressBar from "../../utils/ProgressBar";
import CartContext from "../../store/cart-context";
import PokemonRegion from "../pokeregion/PokemonRegion";
import ChoosePokemon from "../pokemon/ChoosePokemon";
import PokemonShoppingCart from "../cart/PokemonShoppingCart";
import ShowPokeballs from "../showpokeballs/ShowPokeballs";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "16rem",
      textAlign: "center"
    }
  },
  marginleft: {
    marginLeft: "50px"
  },
  paddingTop: {
    paddingTop: "2rem",
    marginLeft: "50px"
  }
}));

export default function Form({ onShowCart }) {
  const ctx = useContext(CartContext);
  const history = useHistory();
  const classes = useStyles();
  const {
    value: fullName,
    hasError: nameHasError,
    isValid: isNameValid,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameInputBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== "");

  const {
    value: codeName,
    hasError: codeHasError,
    isValid: isCodeNameValid,
    valueChangeHandler: codeNameChangeHandler,
    inputBlurHandler: codeNameInputBlurHandler,
    reset: resetCodeNameInput
  } = useInput((value) => value.trim() !== "");

  let isFormValid = false;
  if (isNameValid && isCodeNameValid) {
    isFormValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!isNameValid && !isCodeNameValid) {
      return;
    }
    ctx.addFullNameCode({ fullName, codeName });
    ctx.hasSubmitted();
    history.push("/submit");

    resetNameInput();
    resetCodeNameInput();
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={onSubmitHandler}
    >
      <div className={classes.marginleft}>
        <TitleComponent title="Fill this Form" />

        <ParagraphComponent paragraph="We'll use this info to dominate the pokmin world ! Muhahahah" />
      </div>
      <TextField
        error={nameHasError}
        value={fullName}
        id="filled-basic"
        label="Full Name"
        variant="filled"
        helperText={nameHasError ? "We know that's not yo name!!" : null}
        onBlur={fullNameInputBlurHandler}
        onChange={fullNameChangeHandler}
      />
      <TextField
        error={codeHasError}
        value={codeName}
        id="filled-basic"
        label="Code Name"
        variant="filled"
        helperText={codeHasError ? "error" : null}
        onBlur={codeNameInputBlurHandler}
        onChange={codeNameChangeHandler}
      />
      <div className={classes.paddingTop}>
        <ProgressBar onGetDistance={ctx.addDistance} />
        <ParagraphComponent paragraph="How far is your nearest pokemon center? (in KMs)" />
        <PokemonRegion />
        <ParagraphComponent paragraph="Choose your stating platform" />
        <ChoosePokemon region={ctx.items.region.name} />

        <PokemonShoppingCart onShowCart={onShowCart} />
        <ShowPokeballs />

        <ButtonComponent
          onClick={onSubmitHandler}
          buttonTitle="START MY JOURNEY"
          isValid={!isFormValid}
        />
      </div>
    </form>
  );
}
