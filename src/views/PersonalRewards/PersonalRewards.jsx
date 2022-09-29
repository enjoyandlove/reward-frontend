import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import MainLayout from '../../components/layout/MainLayout';
import pdofinance from '../../assets/img-2/pdo.finance.png';
import jointer from '../../assets/img-2/jointer.png';
import smartswapexchange from '../../assets/img-2/smartswap.png';
import cbdcscience from '../../assets/img-2/cbdc.science.png';
import derexexchange from '../../assets/img-2/derex.exchange.png';
import freezfinance from '../../assets/img-2/freez.finance.png';
import degenswap from '../../assets/img-2/degenswap.png';
import nftmx from '../../assets/img-2/nft.mx.png';
import oxnfinance from '../../assets/img-2/oxn.finance.png';
import zero1 from '../../assets/img-2/zero1.png';
import massinvestments from '../../assets/img-2/mass.investments.png';
import packeyinsure from '../../assets/img-2/packey.insure.png';
import connectwallet from '../../assets/img-2/connect.wallet.png';
import musiofinance from '../../assets/img-2/musio.finance.png';
import socialcurrency from '../../assets/img-2/social.currency.png';
import dclfinance from '../../assets/img-2/dcl.finance.png';
import fwhyi from '../../assets/img-2/fwhyi.png';
import dumpershield from '../../assets/img-2/dumper.shield.png';
import elementzero from '../../assets/img-2/element.zero.png';
import w3b from '../../assets/img-2/w3b.png';


const PersonalRewards = () => {
  return (
    <>
      <MainLayout>
        <div className='px-28 md:px-56'>
          <div className='flex text-6 font-montserrat text-white-2 leading-[30px] items-center'>
            <p>Main page</p>
            <div className='px-3'>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <p className='text-yellow-main'>Personal rewards</p>
          </div>
          <div>
            <p className='uppercase font-play text-1 text-white-main leading-[18px] text-center'>choose a project for personal reward</p>
            <div className='grid grid-cols-5 gap-4 mt-10'>
              <img className='border border-solid border-white-2' src={pdofinance} alt='PDO.finance' />
              <img src={jointer} alt='JOINTER' />
              <img src={smartswapexchange} alt='SMARTSWAP.EXCHANGE' />
              <img src={cbdcscience} alt='CBDC.SCIENCE' />
              <img src={derexexchange} alt='DEREX.Exchange' />
              <img src={dumpershield} alt='DUMPER SHIELD' />
              <img src={freezfinance} alt='Freez.finance' />
              <img src={degenswap} alt='DegenSwap' />
              <img src={nftmx} alt='NFT.mx' />
              <img src={oxnfinance} alt='OXN.Finance' />
              <img src={elementzero} alt='ELEMENT ZERO' />
              <img src={zero1} alt='ZERO/1' />
              <img src={massinvestments} alt='MASS INVESTMENTS' />
              <img src={packeyinsure} alt='Packey Insure' />
              <img src={connectwallet} alt='Connect Wallet' />
              <img src={w3b} alt='W3B' />
              <img src={musiofinance} alt='MUSIO.FINANCE' />
              <img src={socialcurrency} alt='SOCIAL CURRENCY' />
              <img src={dclfinance} alt='DCL FINANCE' />
              <img src={fwhyi} alt='fWHYi' />
            </div>
          </div> 
        </div>
      </MainLayout>
    </>
  )
}

export default PersonalRewards;
