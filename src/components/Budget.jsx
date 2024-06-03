import { useContext, useState } from "react";
import { Context } from "../App";
import "./componentsCSS/Navbar.css";

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
        Total Price: £{total.toFixed(2)}
      </p>
      <div className="input-container">
        {budget.final ? (
          <p className="total-price">Budget: £{budget.final}</p>
        ) : (
          <form className="budget-form" onSubmit={submitBudget}>
            <label id="budget" className="budget-label">
              Press Enter to set a budget
            </label>
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
