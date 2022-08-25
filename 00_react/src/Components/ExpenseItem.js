import "./ExpensItem.css";
function ExpenseItem(props) {
  const onClickHandle = () => {
    expense = props.expenses;
  };
  const expense = props.newexpenses;

  return (
    <div className="expensItemParent">
      <p className="expense">{expense}</p>
      <button className="button" onClick={onClickHandle}>
        Expenses
      </button>
    </div>
  );
}
export default ExpenseItem;
