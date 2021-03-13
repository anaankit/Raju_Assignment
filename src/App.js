import React, {useState} from 'react';

import {sidebarOptions} from './constants';
import './App.css';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {

  const [selected, setSelected] = useState(sidebarOptions[0]);

  const [wallet, setWallet] = useState([]);

  return (
   <div className="main-container">
     <Header />
     <div className="main-section">
     <Sidebar selected={selected} setSelected={setSelected}/>
      <Content wallet={wallet} setWallet={setWallet} selected={selected} />
     </div>
     
   </div>
  );
}

export default App;
