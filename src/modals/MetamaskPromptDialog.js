import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useRecoilState, useRecoilValue } from 'recoil';
import { metamaskOnboarderAtom, metamaskPresentAtom } from '../store/auth';

const MetamaskPromptDialog = () => {
  const metamaskOnboarder = useRecoilValue(metamaskOnboarderAtom);
  const [metamaskPresent, setMetamaskPresent] = useRecoilState(metamaskPresentAtom);
  const handleInstallClick = () => {
    setMetamaskPresent(true);
    metamaskOnboarder.startOnboarding();
  }
  return (
    <Dialog open={!metamaskPresent}>
      <DialogTitle>
        Install Metamask
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Please click on the install button to install metamask first. This Dapp needs Metamask to function!</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleInstallClick}>Install</Button>
      </DialogActions>
    </Dialog>
  )
}

export default MetamaskPromptDialog