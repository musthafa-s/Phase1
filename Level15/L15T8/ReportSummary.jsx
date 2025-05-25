import React from 'react';

function ReportSummary({ transactions }) {
  const income = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const expenses = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  const balance = income - expenses;

  return (
    <div>
      <h3>Summary</h3>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${expenses}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
}

export default ReportSummary;
