import { useContext } from "react";
import { Context } from "../App";

function AddItem({ setList, item }) {
  const [, setTotal] = useContext(Context);
  function handleClick(item) {
    let wasInList = false;

    setList((currItems) => {
      const newItem = {
        item_id: item.item_id,
        item_name: item.item_name,
        price: item.price,
        quantity: 1,
      };

      currItems.forEach((currItem) => {
        if (currItem.item_id === item.item_id) {
          wasInList = true;
          currItem.quantity++;
        }
      });
      if (wasInList) return [...currItems];
      return [...currItems, newItem];
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
