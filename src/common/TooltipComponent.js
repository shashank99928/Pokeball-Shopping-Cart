import { Tooltip, Fab, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2)
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(1)
  }
}));

const TooltipComponent = ({ onShowCart }) => {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Add" aria-label="add" onClick={onShowCart}>
        <Fab size="small" color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default TooltipComponent;
