import { useState } from "react";
import "./componentsCSS/Item.css";

function Item({ item, isListItem }) {
  const [isTransparent, setIsTransparent] = useState(false);

  const handleItemClick = () => {
    setIsTransparent(!isTransparent);
  };

  return (
    <section
      className={`item-container ${
        isTransparent && isListItem ? "transparent" : ""
      }`}
      role="listitem"
      onClick={handleItemClick}
    >
      <p className="item-name">{item.item_name}</p>
      <p className="item-price">Price: £{item.price.toFixed(2)}</p>
      {isListItem ? (
        <p className="item-quantity">Quantity: {item.quantity}</p>
      ) : (
        ""
      )}
    </section>
  );
}

export default Item;
