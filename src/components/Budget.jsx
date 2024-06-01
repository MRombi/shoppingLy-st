import { useContext, useState } from "react";
import { Context } from "../App";

function Budget() {
  const [total] = useContext(Context);
  const [budget, setBudget] = useState({ initial: 0, final: 0 });
  function submitBudget(e) {
    e.preventDefault();
    setBudget({ ...budget, final: budget.initial });
  }
  return (
    <>
      <p className={total <= budget.final ? "total-price" : "high-price"}>
        Total Price: £{total}
      </p>
      <div className="input-container">
        {budget.final ? (
          <p className="total-price">Budget: £{budget.final}</p>
        ) : (
          <form className="budget-form" onSubmit={submitBudget}>
            <input
              id="budget"
              onChange={(e) => setBudget({ initial: e.target.value, final: 0 })}
              placeholder={budget.final ? "" : "Set Budget"}
            />
          </form>
        )}
      </div>
    </>
  );
}
export default Budget;
