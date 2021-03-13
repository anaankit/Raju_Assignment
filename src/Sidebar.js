import React from "react";
import { sidebarOptions } from "./constants";

const Sidebar = ({selected, setSelected}) => {
  const handleSelection = (val) =>{
    setSelected(val)
  }
  return (
    <div className="sidebar-container">
      <ul>
        {sidebarOptions.map((opt) => (
          <li className={selected.label === opt.label && 'selected'}  onClick={()=>handleSelection(opt)} key={opt}>{opt.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
