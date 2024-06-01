import { useContext } from "react";
import { Context } from "../App";

function RemoveItem({ setList, item }) {
  const [, setTotal] = useContext(Context);

  function handleClick(item) {
    setList((currItems) => {
      return currItems.filter((currItem) => currItem !== item);
    });
    setTotal((currTotal) => currTotal - item.price);
  }
  return (
    <button
      value={{ item: item.item_name, price: item.price }}
      onClick={() => handleClick(item)}
    >
      Remove
    </button>
  );
}

export default RemoveItem;
