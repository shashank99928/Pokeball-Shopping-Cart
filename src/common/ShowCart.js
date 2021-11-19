import { Avatar } from "@material-ui/core";
import { Chip } from "@material-ui/core";

function ShowCart({ id, name, qty, updateQty }) {
  const handleDelete = () => {
    console.log(id, "id", id);

    updateQty(id);
  };
  return (
    <div style={{ padding: ".2rem" }}>
      <Chip
        onDelete={handleDelete}
        label={name}
        avatar={<Avatar>{qty}</Avatar>}
        disabled={qty <= 1}
      />
    </div>
  );
}

export default ShowCart;
