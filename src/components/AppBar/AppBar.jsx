import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import crown from '../../assets/crown.png';
import MiniPad from './MiniPad';
import WalletConnect from './WalletConnect';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';



const AppBar = () => {

  const num = [1, 1, 2, 4, 5, 6, 3, 4, 3, 4];
  const navigate = useNavigate()
  const end_date = new Date("Jan 5, 2023 15:37:25").getTime()
  // const [mili, setMili] = useState(0)
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hour, setHour] = useState(0)
  const [day, setDay] = useState(0)

  useEffect(() => {
    setInterval(function () {

      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = end_date - now

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        setDay(0)
        setHour(0)
        setMin(0)
        setSec(0)
        // setMili(0)
      }

      // Time calculations for days, hours, minutes and seconds
      setDay(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMin(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSec(Math.floor((distance % (1000 * 60)) / 1000))
      // setMili(distance % 1000)


    }, 1000);
  })


  return (
    <>
      <div className='flex justify-between flex-col md:flex-row items-center px-5 md:px-0 md:pr-9 mb-10 md:mb-0'>
        <div className='flex items-center flex-col md:flex-row'>
          <a href={window.location.origin} className='relative'>
            <img src={logo} alt='logo' />
            <img src={crown} className="absolute right-[90px] top-5 translate-x-1/2" alt='crown' />
            <p className="text-8 text-yellow-main font-bold font-montserrat absolute right-[90px] bottom-[60px] translate-x-1/2 translate-y-1/2">JACKPOT</p>
          </a>
          <div className='flex text-white-main mb-2 md:mb-0'><MiniPad num={(day - day % 10) / 10} /> <MiniPad num={day % 10} /> : <MiniPad num={(hour - hour % 10) / 10} /><MiniPad num={hour % 10} />:<MiniPad num={(min - min % 10) / 10} /><MiniPad num={min % 10} />:<MiniPad num={(sec - sec % 10) / 10} /><MiniPad num={sec % 10} /></div>
          <div className='cursor-pointer font-bold text-white-2 font-montserrat text-4 mb-6 md:mb-0 md:ml-5' onClick={() => { navigate('/lastWinners') }}>Last winners</div>
        </div>
        <WalletConnect />
      </div>
    </>
  )
}

const PopOverlay = styled.div`
    position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #000; z-index: 100; opacity: 0.9;
`
const PopupBox = styled.div`
    position: fixed;
    top:50%; 
    left:50%; z-index: 200;
    transform: translate(-50%, -50%); width: 730px; max-width: calc(100% - 40px);
    background: #080808; z-index: 100; padding: 74px 33px 28px;
    @media screen and (max-width:600px) {
        padding: 54px 20px 10px;
    }
    ul { 
        li {color: #fff; height: 63px; width: 100%; font-size: 14px; display: flex; align-items: center; border: 1px solid #262626; padding: 10px 18px; margin-bottom: 19px; justify-content: space-between; cursor: pointer;
            @media screen and (max-width:600px) {
                padding: 10px 10px;
                img {margin-left: 5px;}
            }
            @media screen and (max-width: 480px) {
                font-size: 13px; line-height: 1.2;
            }
            &.active {border-color: #e9a134;}
        }
    }
`
const PopLink = styled.div`
    display: flex; margin-bottom: 31px;
    a {color: #fff; width: 50%; text-align: center; border-bottom: 3px solid #262626; padding-bottom: 22px; font-size: 16px; font-weight: bold;
        &.active {border-bottom: 3px solid #e9a134; color: #e9a134;}
    }
    @media screen and (max-width:600px) {
        flex-flow: column; margin-bottom: 10px;
        a {width: 100%; padding-bottom: 6px; margin-bottom: 15px; }
    }
`
const Close = styled.div`
    position: absolute; top: 24px; right: 28px; cursor: pointer;
    @media screen and (max-width:600px) {
        right: 20px; top: 20px;
    }
`
export default AppBar;