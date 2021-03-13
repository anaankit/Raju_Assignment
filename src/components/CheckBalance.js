import React, { useState } from "react";
import Select from "react-select";

import {customStyles} from '../constants';

const CheckBalance = ({ wallet }) => {
  const [selected, setSelected] = useState({});

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };

  const getOptions = () => {
    return wallet.map((val) => ({ value: val, label: val.name }));
  };


  const handleGetBalance = () => {
    alert(`Balance is ${selected.value.amount}`)
  }

  return (
    <div className="New-wallet-container">
      <div className="form-conatainer">
        <div className="label-fields">
          <div className="label">User</div>
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
        </div>
      </div>
      <button onClick={handleGetBalance}>Get Balance</button>
    </div>
  );
};

export default CheckBalance;
