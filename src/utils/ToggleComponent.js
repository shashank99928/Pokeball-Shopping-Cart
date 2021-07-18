import { useEffect, useState } from "react";
import { Switch } from "@material-ui/core";

function ToggleComponent({ onGetBag }) {
  const [state, setState] = useState({
    isBag: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    onGetBag(state);
  }, [onGetBag, state]);

  return (
    <div>
      <div>
        <span>I need a bag for that! </span>
        <span>
          <Switch
            checked={state.isBag}
            onChange={handleChange}
            name="isBag"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </span>
      </div>
    </div>
  );
}

export default ToggleComponent;
