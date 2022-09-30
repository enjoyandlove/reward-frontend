import { ethers } from 'ethers'
import DVoucherNFT from '../contracts/DVoucherNFT.json'
import DVoucherMinter from '../contracts/DVoucherMinter.json'
import axios from 'axios'
import { resolveProperties } from 'ethers/lib/utils';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

export const sortAddress = (add) => {
  const sortAdd = `${add.slice(2, 5)}....${add.slice(add.length - 4)}`;
  return sortAdd;
};

export const getDvoucherPending = async (address) => {
  let pending
  await axios.get(`http://localhost:8000/jackpot/${address}`).then((res) => {
    if(res.status != 200) return;
    pending = res.data.Totalvalue
  })
  return pending
}

export const getDvoucherBalance = async (address) => {
  let balance
  const abi = DVoucherNFT.abi
  const dvoucher = new ethers.Contract(
    process.env.REACT_APP_DVOUCHER_ADDRESS,
    abi,
    signer
  );
  dvoucher.functions.balanceOf(address).then((res) => {
    if(res.status != 200) return;
    balance = res.data
  })
  return balance
}

export const claimRewards = async (amount, address) => {
  const abi = DVoucherMinter.abi
  const dvoucherMint = new ethers.Contract(
    process.env.REACT_APP_DVOUCHERMINTER_ADDRESS,
    abi,
    signer
  );
  const nonce = Math.floor(Math.random() * 256)
  console.log(amount, 'amount', address, 'address');
  dvoucherMint.functions.claim(amount, address, nonce).then((res) => {
    console.log(res);
  })
}