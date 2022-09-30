<<<<<<< HEAD
import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import crown from '../../assets/crown.png';
import MiniPad from './MiniPad';
import WalletConnect from './WalletConnect';


const AppBar = () => {

  const num = [1, 1, 2, 4, 5, 6, 3, 4, 3, 4];

  return (
    <>
      <div className='flex justify-between flex-col md:flex-row items-center px-5 md:px-0 md:pr-9 mb-10 md:mb-0'>
        <div className='flex items-center flex-col md:flex-row'>
          <div className='relative'>
            <img src={logo} alt='logo' />
            <img src={crown} className="absolute right-[90px] top-5 translate-x-1/2" alt='crown' />
            <p className="text-8 text-yellow-main font-bold font-montserrat absolute right-[90px] bottom-[60px] translate-x-1/2 translate-y-1/2">JACKPOT</p>
          </div>
          <div className='flex text-white-main mb-2 md:mb-0'><MiniPad num={num[0]} /> <MiniPad num={num[1]} /> : <MiniPad num={num[2]} /><MiniPad num={num[3]} />:<MiniPad num={num[4]} /><MiniPad num={num[5]} />:<MiniPad num={num[6]} /><MiniPad num={num[7]} /></div>
          <div className='font-bold text-white-2 font-montserrat text-4 mb-6 md:mb-0 md:ml-5'>Last month winners</div>
        </div>
        <WalletConnect />
      </div>
    </>
  )
=======
import React from 'react';
import {useState} from 'react';

import styled from 'styled-components';
import MiniPad from './MiniPad';

import logo from '../../assets/logo.png';
import crown from '../../assets/crown.png';
import close from '../../assets/close.png';
import hico1 from '../../assets/hico1.png';
import hico2 from '../../assets/hico2.png';
import hico3 from '../../assets/hico3.png';
import hico4 from '../../assets/BSC.png';

import smico1 from '../../assets/smico1.png';
import smico2 from '../../assets/smico2.png';
import smico3 from '../../assets/smico3.png';
import smico4 from '../../assets/smico4.png';

const AppBar = () => {
    const num = [1, 1, 2, 4, 5, 6, 3, 4, 3, 4];
    const [isOpen, setOpen] = React.useState(true);
    return (
        <>
            <div className='flex justify-between flex-col md:flex-row items-center px-5 md:px-0 md:pr-9 mb-10 md:mb-0'>
                <div className='flex items-center flex-col md:flex-row'>
                    <div className='relative'>
                        <img src={logo} alt='logo' />
                        <img src={crown} className="absolute right-[90px] top-5 translate-x-1/2" alt='crown' />
                        <p className="text-8 text-yellow-main font-bold font-montserrat absolute right-[90px] bottom-[60px] translate-x-1/2 translate-y-1/2">JACKPOT</p>
                    </div>
                    <div className='flex text-white-main mb-2 md:mb-0'><MiniPad num={num[0]} /> <MiniPad num={num[1]} /> : <MiniPad num={num[2]} /><MiniPad num={num[3]} />:<MiniPad num={num[4]} /><MiniPad num={num[5]} />:<MiniPad num={num[6]} /><MiniPad num={num[7]} /></div>
                    <div className='font-bold text-white-2 font-montserrat text-4 mb-6 md:mb-0 md:ml-5'>Last month winners</div>
                </div>
                <button className='header-btn w-[120px] h-[35px] bg-yellow-main border-2 border-solid border-white-2 bg-opacity-0 text-white-2 font-bold text-4 font-montserrat'  onClick={() => setOpen(!isOpen)}>Connect</button>
            </div>

            <PopOverlay className={`${!isOpen ? "collapsed" : "hidden"}`}></PopOverlay>
            <PopupBox className={`${!isOpen ? "collapsed" : "hidden"}`}>
                <Close onClick={() => setOpen(!isOpen)}><img src={close}></img></Close>
                <PopLink>
                    <a className='active'>
                        <span>1. </span>
                        {/* <span><i class="fas fa-check mr-2"></i></span>   */}
                        Connect your wallet
                    </a>
                    <a><span>2.</span>  Connect your social media</a>
                </PopLink>
                <div className='grid grid-cols-2 gap-x-8'>
                    <ul>
                        <li className='active'>Install Binance Chain Wallet <img src={hico4}></img></li>
                        <li>Install MetaMask <img src={hico1}></img></li>
                        <li>Download TrustWallet App <img src={hico2}></img></li>
                        <li>Download TrustWallet App <img src={hico3}></img></li>
                    </ul>
                    <ul>
                        <li>Gmail <img src={smico1}></img></li>
                        <li>Twitter <img src={smico2}></img></li>
                        <li>LinkedIn <img src={smico3}></img></li>
                        <li>Email <img src={smico4}></img></li>
                    </ul>
                </div>
            </PopupBox>
        </>
    )
>>>>>>> origin/reward_UI
}
const PopOverlay = styled.div `
    position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #000; z-index: 100; opacity: 0.9;
`
const PopupBox = styled.div `
    position: fixed;
    top:50%; 
    left:50%; z-index: 200;
    transform: translate(-50%, -50%); width: 730px;
    background: #080808; z-index: 100; padding: 74px 33px 28px;
    ul { 
        li {color: #fff; height: 63px; width: 100%; font-size: 14px; display: flex; align-items: center; border: 1px solid #262626; padding: 10px 18px; margin-bottom: 19px; justify-content: space-between;
            &.active {border-color: #e9a134;}
        }
    }
`
const PopLink = styled.div `
    display: flex; margin-bottom: 31px;
    a {color: #fff; width: 50%; text-align: center; border-bottom: 3px solid #262626; padding-bottom: 22px; font-size: 16px; font-weight: bold;
        &.active {border-bottom: 3px solid #e9a134; color: #e9a134;}
    }
`
const Close = styled.div `
    position: absolute; top: 24px; right: 28px; cursor: pointer;
`
export default AppBar;