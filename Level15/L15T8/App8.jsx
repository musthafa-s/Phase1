import React, { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import ReportSummary from './ReportSummary';

function App8() {
  const [transactions, setTransactions] = useState([]);

  const loadTransactions = async () => {
    const res = await fetch('http://localhost:5000/api/transactions');
    const data = await res.json();
    setTransactions(data);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <div className="app-container">
      <h1>Budget Tracker</h1>
      <TransactionForm reloadTransactions={loadTransactions} />
      <ReportSummary transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App8;
