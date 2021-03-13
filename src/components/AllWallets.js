import React from "react";

const AllWallets = ({ wallet }) => {
  return (
    <div className="all-wallets-container">
      <table>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Balance</th>
        </tr>
        {wallet.map((val) => (
          <tr key={val.id}>
            <td>{val.id} </td>
            <td>{val.name} </td>
            <td>{val.ph}</td>
            <td>{val.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AllWallets;
