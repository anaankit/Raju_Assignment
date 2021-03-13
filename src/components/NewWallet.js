import React, {useState} from "react";

const initialState = {
  name: "",
  ph: "",
  amount: "",
}
const NewWallet = ({ wallet, setWallet }) => {

  const [data, setdata] = useState(initialState)

  const handleInput = (e, type) => {
    setdata({
      ...data,
      [type]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name && data.ph && data.amount) {
      setWallet([{ ...data, id: wallet.length + 1 }, ...wallet]);
      alert("success");
      setdata(initialState)
    } else {
      alert("please enter all data");
    }
  };

  return (
    <div className="New-wallet-container">
      <div className="form-conatainer">
        <div className="label-fields">
          <div className="label">Name</div>
          <div className="label">Phone</div>
          <div className="label">Amount</div>
        </div>
        <div className="input-fields">
          <input value={data.name} onChange={(e) => handleInput(e, "name")} />
          <input  value={data.ph} onChange={(e) => handleInput(e, "ph")} />
          <input value={data.amount}  type="number" onChange={(e) => handleInput(e, "amount")} />
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default NewWallet;
