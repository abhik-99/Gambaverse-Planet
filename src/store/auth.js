import { atom } from "recoil";
import MetaMaskOnboarding from '@metamask/onboarding';
import v1Contract from "../assets/blockchain/v1_abi.json";
import { v1 } from "../assets/blockchain/contract_addresses";

export const accountAtom = atom({
  key: 'metamask_account',
  default: undefined
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

export const v1DetailsAtom = atom({
  key: 'blockchain_info',
  default: {
    contract_address: v1,
    contract_abi: v1Contract
  }
});