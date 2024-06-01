import { useState } from "react";
import Item from "../components/Item";
import RemoveItem from "../components/RemoveItem";

function List({ list, setList }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedOverItem, setDraggedOverItem] = useState(null);

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (event, item) => {
    event.preventDefault();
    setDraggedOverItem(item);
  };

  const handleDrop = (dropTargetItem) => {
    const draggedItemIndex = list.findIndex(
      (listItem) => listItem === draggedItem
    );
    const droppedItemIndex = list.findIndex(
      (listItem) => listItem === dropTargetItem
    );

    if (draggedItemIndex !== droppedItemIndex) {
      const newList = [...list];
      newList.splice(draggedItemIndex, 1);
      newList.splice(droppedItemIndex, 0, draggedItem);

      setList(newList);
    }

    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  return (
    <div className="list-container">
      <h1>Shopping List</h1>
      <ul className="item-list">
        {list.map((item) => (
          <li
            role="item-list"
            key={item.item_id}
            draggable
            onDragStart={(event) => handleDragStart(event, item)}
            onDragOver={(event) => handleDragOver(event, item)}
            onDrop={(event) => handleDrop(event, item)}
            className={item === draggedOverItem ? "dragged-over" : ""}
          >
            <Item item={item} isCrossable={true} />
            <RemoveItem setList={setList} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
