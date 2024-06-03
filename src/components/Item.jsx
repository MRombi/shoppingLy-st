import { useState } from "react";
import "./componentsCSS/Item.css";

function Item({ item, isListItem }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleItemClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <section
      className={`item-container ${
        isSelected && isListItem ? "transparent" : ""
      }`}
      role="listitem"
      onClick={handleItemClick}
    >
      <p className="item-name">{item.item_name}</p>
      <p className="item-price">Price: £{item.price.toFixed(2)}</p>
      {isListItem ? (
        <p className="item-quantity">Quantity: {item.quantity}</p>
      ) : null}
    </section>
  );
}

export default Item;
