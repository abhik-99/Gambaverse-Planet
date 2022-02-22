import { useEffect } from 'react';
import MetaMaskOnboarding from '@metamask/onboarding';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import Home from './pages/Home';
import Public1 from './pages/Public1';
import Public2 from './pages/Public2';
import MetamaskPromptDialog from './modals/MetamaskPromptDialog';
import { accountAtom, metamaskOnboarderAtom, metamaskPresentAtom } from './store/auth';

function App() {
  const [account, setAccount] = useRecoilState(accountAtom);
  const [ , setMetamaskPresent] = useRecoilState(metamaskPresentAtom);
  const metamaskOnboarder = useRecoilValue(metamaskOnboarderAtom);

  useEffect(() => {
    if(MetaMaskOnboarding.isMetaMaskInstalled()){
      if( account){
        metamaskOnboarder.stopOnboarding();
      }
      async function switchToEthMainnet(){
        await window.ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x1'}]});
      }
      switchToEthMainnet();
    } else {
      setMetamaskPresent(() => false);
    }
  }, [account, metamaskOnboarder, setMetamaskPresent]);

  useEffect(() => {
    if(MetaMaskOnboarding.isMetaMaskInstalled() ){
      if(account) {
        window.ethereum.on('accountsChanged', (accounts) => setAccount(accounts[0]));
      }

      window.ethereum.on('chainChanged', (_chainId) => window.location.reload());
    }
    return () => {
      window.ethereum.removeListener('accountsChanged', (accounts) => setAccount(accounts[0]));
    }
  }, [account, setAccount])

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/1" element={<Public1 />} />
        <Route path="/2" element={<Public2 />} />
      </Routes>
    </BrowserRouter>
    <MetamaskPromptDialog />
    </div>
  );
}

export default App;
