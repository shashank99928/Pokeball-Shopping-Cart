import ProgressBar from "../../utils/ProgressBar";
import ParagraphComponent from "../../utils/ParagraphComponent";
import TitleComponent from "../../utils/TitleComponent";
import { InputLabel, Select } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

import {
  Dialog,
  DialogContent,
  useMediaQuery,
  FormControl
} from "@material-ui/core";
import React, { useState, useCallback } from "react";
import ToggleComponent from "../../utils/ToggleComponent";
import ButtonComponent from "../../utils/ButtonComponent";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  },
  center: {
    paddingLeft: "50px",
    paddingTop: "2.3rem"
  },
  background: {
    paddingTop: "1rem",
    width: "350px",
    margin: "4% auto",
    borderRadius: "1.5%",
    fontFamily: "sans-serif",
    textAlign: "center"
  }
}));

const typesOfBalls = [
  { id: 1, name: "Poke Balls", qty: 10 },
  { id: 2, name: "Great Ball", qty: 20 },
  { id: 3, name: "Super Potion", qty: 30 },
  { id: 4, name: "Hyper Potion", qty: 10 }
];

function Modal({ onClose }) {
  const classes = useStyles();
  const ctx = useContext(CartContext);
  const [isValid, setIsValid] = useState(false);
  const [id, setId] = useState(0);
  const [ballType, setBallType] = useState("");
  const [ballQty, setBallQty] = useState(60);
  const [hasBag, setHasBag] = useState(true);
  let ballData;

  const choosenBallsHandler = (event) => {
    ballData = event.target.value.split(",");
    if (+ballData[0] === 0 || ballData[1].trim() === "") {
      setIsValid(false);
      setBallType("");
      return;
    }
    setIsValid(true);
    setId(+ballData[0]);
    setBallType(ballData[1]);
  };

  const getBallSHandler = (newballQty) => {
    setBallQty(newballQty);
  };

  const getBagHandler = useCallback((hasBag) => {
    setHasBag(hasBag);
  }, []);

  const addItemsToCartHandler = () => {
    ctx.addPokeball({
      id,
      ballType,
      ballQty,
      hasBag: hasBag.isBag
    });
    onClose();
  };

  console.log("choosenBalls", id, ballType, ballQty, hasBag);

  return (
    <div className={classes.center}>
      <Dialog
        fullScreen={false}
        maxWidth={"sm"}
        open={true}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <div className={classes.background}>
            <TitleComponent title="Place Your Order" />
            <ParagraphComponent paragraph="We'll use this info to pack your order! Muhahahahahaha" />
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="filled-age-native-simple">
                Choose Item
              </InputLabel>
              <Select native onChange={(event) => choosenBallsHandler(event)}>
                <option aria-label="None" value="" />
                {typesOfBalls.map((balls) => {
                  return (
                    <option
                      key={balls.id}
                      id={balls.id}
                      value={[balls.id, balls.name, balls.qty]}
                    >
                      {balls.name}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <p>Choose your stating platform </p>
            <div className={classes.center}>
              <ProgressBar onGetDistance={getBallSHandler} />
            </div>
            <div>
              <ParagraphComponent paragraph="Select Quantity" />
            </div>
            <ToggleComponent onGetBag={getBagHandler} />
            <ButtonComponent
              buttonTitle={`ADD TO CART`}
              onClick={addItemsToCartHandler}
              isValid={!isValid}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Modal;
