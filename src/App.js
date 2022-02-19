import { useEffect } from 'react';
import MetaMaskOnboarding from '@metamask/onboarding';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import Home from './pages/Home';
import Public1 from './pages/Public1';
import Public2 from './pages/Public2';
import MetamaskPromptDialog from './modals/MetamaskPromptDialog';
import { accountsAtom, metamaskOnboarderAtom, metamaskPresentAtom } from './store/auth';

function App() {
  const accounts = useRecoilValue(accountsAtom);
  const [ , setMetamaskPresent] = useRecoilState(metamaskPresentAtom);
  const metamaskOnboarder = useRecoilValue(metamaskOnboarderAtom);

  useEffect(() => {
    if(MetaMaskOnboarding.isMetaMaskInstalled()){
      if( accounts > 0){
        metamaskOnboarder.stopOnboarding();
      }
    } else {
      setMetamaskPresent(() => false);
    }
  }, [accounts, metamaskOnboarder, setMetamaskPresent]);

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
