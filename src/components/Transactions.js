import React from "react";

const AllWallets = ({ wallet }) => {
  return (
    <div className="all-wallets-container">
      <table>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Balance</th>
        </tr>
        {wallet.map((val) => {
          const {name, transactions} = val;
          if(transactions){
            return transactions.map (txn => (
                <tr>
                  <td>{name} </td>
                  <td>{txn.date} </td>
                  <td>{txn.amount}</td>
                  <td>{txn.balance}</td>
                </tr>
              )
            
            )
          }
          return '';
        })}
      </table>
    </div>
  );
};

export default AllWallets;
