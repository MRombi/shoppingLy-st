import { useContext } from "react";
import { Context } from "../App";

function RemoveItem({ setList, item }) {
  const [, setTotal] = useContext(Context);

  function handleClick(item) {
    let wasInList = false;
    setList((currItems) => {
      currItems.forEach((currItem) => {
        if (currItem.item_id === item.item_id && currItem.quantity > 1) {
          wasInList = true;
          currItem.quantity--;
        }
      });
      if (wasInList) return [...currItems];
      return currItems.filter((currItem) => currItem.item_id !== item.item_id);
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
