import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransactions = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        ${expenseTransaction.expenseAmount}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(expenseTransaction.id)}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default ExpenseTransactions;
