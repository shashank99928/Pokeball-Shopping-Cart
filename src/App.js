import Form from "./components/form/Form";
import Modal from "./components/modal/Modal";
import SubmitComponent from "./components/submit/SubmitComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import "./styles.css";
import { useState, useContext } from "react";
import CartContext from "./store/cart-context";

export default function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const ctx = useContext(CartContext);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
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

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}
