import Form from "./components/form/Form";
import Modal from "./components/modal/Modal";
import SubmitComponent from "./components/submit/SubmitComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import "./styles.css";
import {
  Grid,
  Typography,
  Button,
  Paper,
  Switch as MiSwitch,
} from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@mui/material/colors/blue";

import { useState, useContext } from "react";
import CartContext from "./store/cart-context";
import { light } from "@material-ui/core/styles/createPalette";

export default function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const ctx = useContext(CartContext);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  !darkMode
    ? document.body.classList.add("container-light")
    : document.body.classList.remove("container-light");

  darkMode
    ? document.body.classList.add("container-dark")
    : document.body.classList.remove("container-dark");

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Paper>
            <MiSwitch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <Switch>
              <Route path="/" exact>
                {<Form onShowCart={showCartHandler} />}
                {cartIsShown && <Modal onClose={hideCartHandler} />}
              </Route>
              {ctx.hasSubmittedState && (
                <Route path="/submit">
                  <SubmitComponent />
                </Route>
              )}
              {ctx.hasSubmittedState && (
                <Route path="/submit">
                  <SubmitComponent />
                </Route>
              )}
              <Route path="*">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </Paper>
        </div>
      </ThemeProvider>
    </div>
  );
}
