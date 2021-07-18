import ParagraphComponent from "../../utils/ParagraphComponent";
import TooltipComponent from "../../utils/TooltipComponent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const PokemonShoppingCart = ({ onShowCart }) => {
  const classes = useStyles();
  const inLineStyle = { width: "195px" };

  return (
    <div className={classes.root}>
      <span>
        <ParagraphComponent
          paragraph="What do you want to pack?"
          style={inLineStyle}
        />
      </span>
      <TooltipComponent onShowCart={onShowCart} />
    </div>
  );
};

export default PokemonShoppingCart;
