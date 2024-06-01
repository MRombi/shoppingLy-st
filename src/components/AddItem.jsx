function AddItem({ setList, item }) {
  function handleClick(item) {
    setList((currItems) => {
      return [...currItems, item];
    });
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
