import { supermarket } from "../assets/data";
import AddItem from "../components/AddItem";
import Item from "../components/Item";

function Supermarket({ setList }) {
  return (
    <main>
      <h1>Supermarket</h1>
      <ul className="item-supermarket">
        {supermarket.map((item) => {
          return (
            <li key={item.item_id}>
              <Item item={item} isListItem={false} />
              <AddItem setList={setList} item={item} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Supermarket;
