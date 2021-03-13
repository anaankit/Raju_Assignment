import React, {useState} from "react";
import Select from "react-select";

import {customStyles} from '../constants';

const SpendFunds = ({wallet, setWallet}) => {
  const [selected, setSelected] = useState({});
  const [num, setNum] = useState('');

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };

  const getOptions = () => {
    return wallet.map((val) => ({ value: val, label: val.name }));
  };

  const handleAdd = () => {
    if(num){
      const updatedWallet = wallet.reduce((allwallets, val)=>{
        if(val.id === selected.value.id){
          val.amount = Number(val.amount) - Number(num);
          val.transactions = [{
            name:val.name,
            date: new Date().toDateString(),
            balance: val.amount,
            amount: num,
          }]
         
          return [...allwallets, val]
        }
        return [...allwallets, val]
      },[])
      setWallet(updatedWallet);
      setSelected({});
      setNum('');
    }else {
      alert('please enter amount');
    }
   
  }


  const handleAddChange = e =>{
    setNum(e.target.value);
  }

  return (
    <div className="New-wallet-container">
      <div className="form-conatainer">
        <div className="label-fields">
          <div className="label">User</div>
          <div className="label">Amount</div>
        </div>
        <div className="input-fields">
        <div className="select-container">
            <Select
              isSearchable={false}
              styles={customStyles}
              className="basic-single"
              classNamePrefix="select"
              value={selected}
              onChange={handleChange}
              options={getOptions()}
            />
          </div>
        <input min="0" value={num} type="number" onChange={handleAddChange} />
        </div>
      </div>
      <button onClick={handleAdd}>Submit</button>

    </div>
  );
};

export default SpendFunds;
