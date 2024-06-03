import { useState } from "react";
import Item from "../components/Item";
import RemoveItem from "../components/RemoveItem";

function List({ list, setList }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedOverItem, setDraggedOverItem] = useState(null);

  const handleDragStart = (event, item) => {
    setDraggedItem(item);
    event.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (event, item) => {
    event.preventDefault();
    setDraggedOverItem(item);
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (event, dropTargetItem) => {
    event.preventDefault();
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

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  return (
    <main className="list-container">
      <h1>Shopping List</h1>
      <ul className="listitem">
        {list.map((item) => (
          <li
            role="listitem"
            key={item.item_id}
            draggable
            onDragStart={(event) => handleDragStart(event, item)}
            onDragOver={(event) => handleDragOver(event, item)}
            onDrop={(event) => handleDrop(event, item)}
            onDragEnd={handleDragEnd}
            className={item === draggedOverItem ? "dragged-over" : ""}
          >
            <Item item={item} isListItem={true} />
            <RemoveItem setList={setList} item={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default List;
