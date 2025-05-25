import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div>
      <h3>Transaction List</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.type === 'income' ? '+' : '-'}${transaction.amount} - {transaction.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
