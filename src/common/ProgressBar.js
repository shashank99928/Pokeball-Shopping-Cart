import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "15.8rem",
    height: theme.spacing(6),
  },
  margin: {},
}));

export default function ProgressBar({ onGetDistance }) {
  const classes = useStyles();

  const distanceHandler = (event, value) => {
    onGetDistance(value);
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom></Typography>
      <Slider
        defaultValue={60}
        aria-labelledby="discrete-slider-always"
        step={1}
        min={0}
        onChange={distanceHandler}
        valueLabelDisplay="on"
        color="secondary"
      />
    </div>
  );
}
