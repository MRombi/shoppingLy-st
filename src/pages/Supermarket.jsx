import { supermarket } from "../assets/data";
import AddItem from "../components/AddItem";
import Item from "../components/Item";

function Supermarket({ setList }) {
  return (
    <>
      <h1>Supermarket</h1>
      <ul className="item-list">
        {supermarket.map((item) => {
          return (
            <>
              <Item key={item.item_id} item={item} />
              <AddItem setList={setList} item={item} />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Supermarket;
