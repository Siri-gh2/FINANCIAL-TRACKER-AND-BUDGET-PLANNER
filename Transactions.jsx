import React, { useState } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Income", amount: 5000, category: "Salary", date: "2025-03-25" },
    { id: 2, type: "Expense", amount: 2000, category: "Food", date: "2025-03-24" },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    type: "Income",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTransaction.amount || !newTransaction.category || !newTransaction.date) {
      alert("Please fill in all fields!");
      return;
    }
    setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1 }]);
    setNewTransaction({ type: "Income", amount: "", category: "", date: "" });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>

      {/* Transaction Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md mb-6">
        <div className="flex space-x-4">
          <select name="type" value={newTransaction.type} onChange={handleChange} className="p-2 border rounded">
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newTransaction.amount}
            onChange={handleChange}
            className="p-2 border rounded w-32"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newTransaction.category}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input type="date" name="date" value={newTransaction.date} onChange={handleChange} className="p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
        </div>
      </form>

      {/* Transactions Table */}
      <table className="w-full bg-white shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Type</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Category</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="text-center border-t">
              <td className="p-2">{transaction.type}</td>
              <td className="p-2">₹{transaction.amount}</td>
              <td className="p-2">{transaction.category}</td>
              <td className="p-2">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;