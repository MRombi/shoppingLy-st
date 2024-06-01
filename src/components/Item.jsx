function Item({ item }) {
  return (
    <li className="item">
      <p>Item: {item.item_name}</p>
      <p>Price: {item.price}</p>
    </li>
  );
}

export default Item;
