import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import List from './Components/List';
import SearchBar from './Components/Searchbar';


function App() {

  const initialTransactions =[
    {date:'26/04/2024' , category: 'Groceries', description:'Weekly Spending', amount:'Ksh 10000'},
    {date: '27/04/2024', category: 'Water ', description:'Payment for the water bill', amount:'ksh 3000'},
    {date:'28/04/2024', category:'Income', description:'Paycheck from Google', amount:'ksh 1200000'},
    {date:'25/04/2024', category:'Entertainment', description:'Netflix Monthly Subscription',amount:'ksh 1500'}
  ]
  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <Header />
      <Form onSubmit={addTransaction} />
      <SearchBar onChange={setSearchTerm} /> 
      <List transactions={transactions} />
    </div>
  );
}
export default App;