
import React, { useState } from 'react';
import '../App.css';

function Form({ onSubmit }) {
  const [newTransaction, setNewTransaction] = useState({ date: '', category: '', description: '', amount: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newTransaction);
    setNewTransaction({ date: '', category: '', description: '', amount: '' });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="transaction-form">
        <label>
          Date:
          <input type="text" name="date" value={newTransaction.date} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={newTransaction.category} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={newTransaction.description} onChange={handleChange} />
        </label>
        <label>
          Amount:
          <input type="text" name="amount" value={newTransaction.amount} onChange={handleChange} />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default Form;
