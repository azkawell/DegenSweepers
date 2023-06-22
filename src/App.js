import {useMemo, useState} from 'react';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header'
import Home from './pages/Home'
import Staking from "./pages/Staking";
import './App.css';

import { 
  ConnectionProvider, 
  WalletProvider,
} from "@solana/wallet-adapter-react/lib/index.js";

import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getLedgerWallet,
  getSolletWallet,
  getSolletExtensionWallet
} from '@solana/wallet-adapter-wallets';

import { NEXT_PUBLIC_SOLANA_NETWORK, NEXT_PUBLIC_SOLANA_RPC_HOST } from './consts/env';

import { 
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { WalletBalanceProvider } from './hooks/use-wallet-balance';

const network = NEXT_PUBLIC_SOLANA_NETWORK
function App() {
  const [linkStatus, setLinkStatus] = useState(true)
  // const network = clusterApiUrl('devnet');
  const endPoint = useMemo(() => NEXT_PUBLIC_SOLANA_RPC_HOST, []);
  // const endPoint = useMemo(() => "https://solana-api.projectserum.com", []);

  const wallets = useMemo(() => [
    getPhantomWallet(),
    getSolletWallet({network}),
    getSolflareWallet(),
    getSolletExtensionWallet({network}),
    getLedgerWallet(),
    getSlopeWallet(),
  ], []);

  return (
    <>
      <ConnectionProvider endpoint={endPoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider >
            <WalletBalanceProvider>
              <div className="App">
                <Router>
                  <Header linkStatus={linkStatus} setLinkStatus={setLinkStatus} />
                  <Switch>
                    <Route exact path="/"><Home linkStatus={linkStatus} setLinkStatus={setLinkStatus} /></Route>
                    <Route path="/staking"><Staking /></Route>
                  </Switch>
                </Router>
                
              </div>
            </WalletBalanceProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;