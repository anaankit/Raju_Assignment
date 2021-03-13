import React from 'react';

const Content = ({selected:{Component}, wallet, setWallet}) =>{
    return (
        <div className="content-container">
         <Component wallet={wallet} setWallet={setWallet}/>
        </div>
    )
}

export default Content;