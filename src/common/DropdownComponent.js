import { InputLabel, FormControl, Select } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const DropdownComponent = ({ onPokemonRegion, onSelect }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    if (event.target.value.trim() === "") {
      return;
    }
    const id = event.target.value.split(",")[0];
    const name = event.target.value.split(",")[1];
    const qty = +event.target.value.split(",")[2];
    onSelect({ id, name, qty });
  };

  return (
    <div>
      <FormControl
        variant="filled"
        color="secondary"
        className={classes.formControl}
      >
        <InputLabel htmlFor="filled-age-native-simple">Choose Item</InputLabel>
        <Select
          required
          native
          onChange={handleChange}
          inputProps={{
            id: "filled-age-native-simple",
          }}
        >
          <option name="" value="" />
          {onPokemonRegion.map((data) => {
            return (
              <option
                key={data.id}
                name={data.region}
                value={[data.id, data.region, data.distance]}
              >
                {data.region}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdownComponent;
