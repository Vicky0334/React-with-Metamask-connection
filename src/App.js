import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";

function App() {

  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  // state for keeping track of current connected account.
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }

  const spacing = 12;
  const backgroundColor = '#8B629B'; // or any color you'd like

  if (account === null) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor }}>
        <div className="App" style={{ margin: spacing + 'em', backgroundColor, padding: '20px', borderRadius: '8px' }}>
          {
            isWalletInstalled ? (
              <button onClick={connectWallet} style={{ padding: '10px 20px', fontSize: '16px' }}>Connect Metamask</button>
            ) : (
              <p>Install Metamask wallet</p>
            )
          }
        </div>
      </div>
    );
  }

  return (
    <div className="App" style={{ backgroundColor, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p>Connected as: {account}</p>
    </div>
  );
}

export default App;
