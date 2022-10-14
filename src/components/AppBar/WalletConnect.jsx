import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import Modal from 'simple-react-modal';
import { faTimes, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import metamask from '../../assets/wallet-icons/metamask.png';
import binance from '../../assets/wallet-icons/binance.png';
import trustwallet from '../../assets/wallet-icons/trustwallet.png';
import mathwalletimg from '../../assets/wallet-icons/mathwallet.png';
import gmail from '../../assets/social-icons/gmail.png';
import twitter from '../../assets/social-icons/twitter.png';
import linkedin from '../../assets/social-icons/linkedin.png';
import email from '../../assets/social-icons/email.png';
import { sortAddress, claimRewards, getDvoucherPending, getDvoucherBalance } from '../../utils/utils';
import { injected, bsc, Wallet_Connect, mathwallet } from '../../utils/connectors';


const WalletConnect = () => {

  const { activate, deactivate, active, chainId, account } = useWeb3React();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [dvoucherPending, setDvoucherPending] = useState();
  const [dvoucherBalance, setDvoucherBalance] = useState();

  useEffect(() => {
    if (active) {
      const perform = async () => {
        const pending = await getDvoucherPending(account)
        pending ? setDvoucherPending(pending) : setDvoucherPending(0)
        const balance = await getDvoucherBalance(account)
        balance ? setDvoucherBalance(balance) : setDvoucherBalance(0)
      }
      perform()

    }
  }, [active])

  const handleBinance = async () => {
    await activate(bsc);
    setIsModalOpened(false);
  }

  const handleMetamask = async () => {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err)
    }
    setIsModalOpened(false);
  }

  const handleTrust = async () => {
    await activate(Wallet_Connect);
    setIsModalOpened(false);
  }

  const handleMath = async () => {
    await activate(mathwallet);
    setIsModalOpened(false);
  }

  const handleClaim = async () => {
    await claimRewards(dvoucherPending, account)
  }

  return (
    <>
      <div>
        {active ? (
          <div className='flex items-center'>
            <p className='text-4 text-white-2 font-montserrat'>dVouchers pending:<span><FontAwesomeIcon icon={faQuestionCircle} /></span><span className='text-white-main font-bold pl-2'>${dvoucherPending}</span></p>
            <button className='w-[120px] h-[35px] border-2 border-solid border-yellow-main text-yellow-main text-4 font-montserrat font-bold ml-4' onClick={handleClaim}>CLAIM</button>
            <div className='text-white-8 text-4 font-montserrat mx-4'>|</div>
            <p className='text-4 text-white-2 font-montserrat'>dVoucher balance: <span className='font-bold text-yellow-main'>{dvoucherBalance}</span></p>
            <div className='text-white-8 text-4 font-montserrat mx-4'>|</div>
            <p className='font-bold text-white-main text-4 font-montserrat'>0x{sortAddress(account)}</p>
          </div>
        ) : (
          <button className='header-btn w-[120px] h-[35px] bg-yellow-main border-2 border-solid border-white-2 bg-opacity-0 text-white-2 font-bold text-4 font-montserrat' onClick={() => setIsModalOpened(true)}>Connect</button>
        )}
        <Modal
          closeOnOuterClick={true}
          containerStyle={{ backgroundColor: '#080808', width: '40%' }}
          containerClassName=''
          show={isModalOpened}
          onClose={() => {
            setIsModalOpened(false);
          }}>
          <div className='text-right text-white-main text-8 mt-3 mb-5 cursor-pointer' onClick={() => { setIsModalOpened(false); }}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className='flex px-5 pb-8'>
            <div className='w-1/2'>
              <p className='text-white-main text-10 font-bold font-montserrat text-center'>1. Connect your wallet</p>
              <div className='my-5 h-[3px] bg-white-7'></div>
              <div className='pr-3'>
                <div className='flex justify-between items-center border border-solid border-white-7 px-3 cursor-pointer' onClick={handleBinance}><p className='text-4 leading-[52px] text-white-main font-montserrat'>Install Binance Chain Wallet</p><img src={binance} alt='Binance' /></div>
                <div className='flex justify-between border border-solid border-white-7 items-center px-3 mt-4 cursor-pointer' onClick={handleMetamask}><p className='text-4 leading-[52px] text-white-main font-montserrat'>Install MetaMask</p><img src={metamask} alt='Metamask' /></div>
                <div className='flex justify-between border border-solid border-white-7 items-center px-3 mt-4 cursor-pointer' onClick={handleTrust}><p className='text-4 leading-[52px] text-white-main font-montserrat'>Download TrustWallet App</p><img src={trustwallet} alt='TrustWallet' /></div>
                <div className='flex justify-between border border-solid border-white-7 items-center px-3 mt-4 cursor-pointer' onClick={handleMath}><p className='text-4 leading-[52px] text-white-main font-montserrat'>Get MathWallet App</p><img src={mathwalletimg} alt='MathWallet' /></div>
              </div>
            </div>
            <div className='w-1/2'>
              <p className='text-white-main text-10 font-bold font-montserrat text-center'>2. Connect your social media</p>
              <div className='my-5 h-[3px] bg-white-7'></div>
              <div className='pl-3'>
                <div className='flex justify-between items-center border border-solid border-white-7 px-3 cursor-pointer'><p className='text-4 leading-[52px] text-white-main font-montserrat'>Gmail</p><img src={gmail} alt='Binance' /></div>
                <div className='flex justify-between border border-solid border-white-7 items-center px-3 mt-4 cursor-pointer'><p className='text-4 leading-[52px] text-white-main font-montserrat'>Twitter</p><img src={twitter} alt='Metamask' /></div>
                <div className='flex justify-between border border-solid border-white-7 items-center px-3 mt-4 cursor-pointer'><p className='text-4 leading-[52px] text-white-main font-montserrat'>Linkedin</p><img src={linkedin} alt='TrustWallet' /></div>
                <div className='flex justify-between border border-solid border-white-7 items-center px-3 mt-4 cursor-pointer'><p className='text-4 leading-[52px] text-white-main font-montserrat'>Email</p><img src={email} alt='MathWallet' /></div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default WalletConnect;