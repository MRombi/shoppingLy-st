function RemoveItem({ setList, item }) {
  function handleClick(item) {
    setList((currItems) => {
      return currItems.filter((currItem) => currItem !== item);
    });
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
