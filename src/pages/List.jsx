import Item from "../components/Item";

function List({ list }) {
  return (
    <>
      <h1>Supermarket</h1>
      <ul className="item-list">
        {list.map((item) => {
          return <Item key={item.item_id} item={item} />;
        })}
      </ul>
    </>
  );
}

export default List;
