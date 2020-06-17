import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className="transaction">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">
        ${incomeTransaction.incomeAmount}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(incomeTransaction.id)}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default IncomeTransaction;
