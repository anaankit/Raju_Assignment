import AddFunds from "./components/AddFunds";
import AllWallets from "./components/AllWallets";
import CheckBalance from "./components/CheckBalance";
import NewWallet from "./components/NewWallet";
import SpendFunds from "./components/SpendFunds";
import Transactions from "./components/Transactions";

export const sidebarOptions = [
  {
    label: "All Wallets",
    Component: AllWallets,
  },
  {
    label: "New Wallet",
    Component: NewWallet,
  },
  {
    label: "Check Balance",
    Component: CheckBalance,
  },
  {
    label: "Add Funds",
    Component: AddFunds,
  },
  {
    label: "Spend Funds",
    Component: SpendFunds,
  },
  {
    label: "All Transcations",
    Component: Transactions,
  },
];


export const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#9e9e9e",
      minHeight: "30px",
      height: "30px",
      width: "300px",
      boxShadow: state.isFocused ? null : null,
    }),
  
    valueContainer: (provided, state) => ({
        height: "30px",
        padding: "0 20px",
        "flex": 1,
        "overflow": "hidden",
        "boxSizing": "border-box"
      }),

  
    // input: (provided, state) => ({
    //   ...provided,
    //   margin: "0px",

    // }),
    indicatorSeparator: (state) => ({
      display: "none",

    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "30px",
    }),
  };
  