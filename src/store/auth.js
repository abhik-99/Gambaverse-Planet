import { atom } from "recoil";
import MetaMaskOnboarding from '@metamask/onboarding';

export const accountsAtom = atom({
  key: 'metamask_accounts',
  default: []
});

export const containsTokenAtom = atom({
  key: 'account_contains_token',
  default: false
});

export const metamaskPresentAtom = atom({
  key: 'metamask_present',
  default: true
});

export const metamaskOnboarderAtom = atom({
  key: 'metamask_onboarder',
  default: new MetaMaskOnboarding()
});