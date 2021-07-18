import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, CardContent } from "@material-ui/core/";
import CartContext from "../../store/cart-context";
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

const SubmitComponent = () => {
  const classes = useStyles();
  const ctx = useContext(CartContext);
  console.log(ctx.items, ctx.cart);

  const { distance, nameAndCodde, region, pokemon } = ctx.items;

  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "1rem",
        width: "auto",
        backgroundColor: "rgb(36, 38, 41)",
        color: "#94a1b2",
        fontFamily: "cursive"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "2rem"
        }}
      >
        <Avatar
          alt="Remy Sharp"
          className={classes.large}
          src={pokemon.image}
        />
      </div>
      <CardContent>
        <h5>Name:{nameAndCodde.fullName}</h5>
        <h5>Code:{nameAndCodde.codeName}</h5>
        <h5>Region :{region.name}</h5>
        <h5>Distance:{distance}</h5>
        <h5> Pokemon:{pokemon.pokemonName}</h5>
      </CardContent>
      <div style={{ textAlign: "center" }}>
        {ctx.cart.map((item) => {
          return (
            <div style={{ textAlign: "center" }} key={item.id}>
              <ul
                style={{
                  listStyle: "none",
                  color: "white",
                  paddingRight: "2.8rem"
                }}
              >
                <li>Pokeball Id : {item.id}</li>
                <li> Pokeball Type :{item.ballType} </li>
                <li> No of Pokeball {item.ballQty}</li>
                <li style={{ paddingBottom: "2rem" }}>
                  {item.hasBag ? "bag is available" : "bag is not available"}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubmitComponent;

/* <div
style={{
  textAlign: "center",
  fontSize: "1rem",
  width: "auto",
  backgroundColor: "rgb(36, 38, 41)",
  color: "#94a1b2",
  fontFamily: "cursive"
}}
>
<div
  style={{
    display: "flex",
    justifyContent: "space-around",
    padding: "2rem"
  }}
>
  <Avatar alt="Remy Sharp" src={image} className={classes.large} />
</div>
<CardContent>
  <h5>Name:{name}</h5>
  <h5>Code:{code}</h5>
  <h5>Region :{region}</h5>
  <h5>Distance:{distance}</h5>
  <h5> Pokemon:{pokemon}</h5>
</CardContent>
<div style={{ textAlign: "center" }}>
  {cartfinalDataForSubmission.length === 0
    ? null
    : cartfinalDataForSubmission.map((item) => {
        return (
          <div style={{ textAlign: "center" }} key={item.id}>
            <ul
              style={{
                listStyle: "none",
                color: "white",
                paddingRight: "2.8rem"
              }}
            >
              <li>Pokeball Id : {item.id}</li>
              <li> Pokeball Type :{item.name} </li>
              <li> No of Pokeball {item.qty}</li>
              <li style={{ paddingBottom: "2rem" }}>
                {item.bag.checkedA
                  ? "bag is available"
                  : "bag is not available"}
              </li>
            </ul>
          </div>
        );
      })}
</div>
{console.log(cartfinalDataForSubmission, "cartfinalDataForSubmission")}
</div> */
