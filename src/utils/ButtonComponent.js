import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    },
    width: {
      width: "220px"
    }
  }
}));

function ButtonComponent({ buttonTitle, isValid, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        onClick={onClick}
        size="small"
        variant="contained"
        color="secondary"
        disabled={isValid}
      >
        {buttonTitle}
      </Button>
    </div>
  );
}

export default ButtonComponent;
