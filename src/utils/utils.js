import {ethers} from 'ethers';
import DVoucherMinter from '../contracts/DVoucherMinter.json';

// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const signer = provider.getSigner();
// const abi = DVoucherMinter.abi;

// export const contract = new ethers.Contract(
//   REACT_APP_CONRACT_ADDRESS,
//   abi,
//   signer
// );

export const sortAddress = (add) => {
    const sortAdd = `${add.slice(2, 5)}....${add.slice(add.length - 4)}`;
    return sortAdd;
  };