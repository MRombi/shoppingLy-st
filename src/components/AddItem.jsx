import { useContext } from "react";
import { Context } from "../App";

function AddItem({ setList, item }) {
  const [, setTotal] = useContext(Context);
  function handleClick(item) {
    setList((currItems) => {
      return [...currItems, item];
    });
    setTotal((currTotal) => currTotal + item.price);
  }
  return (
    <button
      value={{ item: item.item_name, price: item.price }}
      onClick={() => handleClick(item)}
    >
      Add
    </button>
  );
}

export default AddItem;
