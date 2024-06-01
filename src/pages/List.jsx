import Item from "../components/Item";
import RemoveItem from "../components/RemoveItem";

function List({ list, setList }) {
  return (
    <>
      <h1>Supermarket</h1>
      <ul className="item-list">
        {list.map((item) => {
          return (
            <>
              <Item key={item.item_id} item={item} />
              <RemoveItem setList={setList} item={item} />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default List;
