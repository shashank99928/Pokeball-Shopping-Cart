import { useContext } from "react";
import ShowCart from "../../utils/ShowCart";
import CartContext from "../../store/cart-context";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    flexWrap: "wrap-reverse",
    width: "350px"
  }
}));

const ShowPokeballs = () => {
  const ctx = useContext(CartContext);
  const classes = useStyles();

  return (
    <Box className={classes.flex}>
      {ctx.cart.map((data, index) => (
        <ShowCart
          key={index}
          id={data.id}
          name={data.ballType}
          qty={data.ballQty}
          updateQty={ctx.removeItem}
        />
      ))}
    </Box>
  );
};

export default ShowPokeballs;
