import { useState } from "react";
import "./componentsCSS/Item.css";

function Item({ item, isCrossable }) {
  const [isTransparent, setIsTransparent] = useState(false);

  const handleItemClick = () => {
    setIsTransparent(!isTransparent);
  };

  return (
    <li
      className={`item-container ${
        isTransparent && isCrossable ? "transparent" : ""
      }`}
      role="listitem"
      onClick={handleItemClick}
    >
      <p className="item-name">{item.item_name}</p>
      <p className="item-price">Price: £{item.price}</p>
    </li>
  );
}

export default Item;
