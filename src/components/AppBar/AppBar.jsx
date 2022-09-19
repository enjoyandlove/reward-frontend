import React from 'react';
import logo from '../../assets/logo.png';
import crown from '../../assets/crown.png';
import MiniPad from './MiniPad';

const AppBar = () => {
    const num = [1, 1, 2, 4, 5, 6, 3, 4, 3, 4];
    return (
        <>
            <div className='flex justify-between items-center pr-9'>
                <div className='flex items-center'>
                    <div className='relative'>
                        <img src={logo} alt='logo' />
                        <img src={crown} className="absolute right-[90px] top-5 translate-x-1/2" alt='crown' />
                        <p className="text-8 text-yellow-main font-bold font-montserrat absolute right-[90px] bottom-[60px] translate-x-1/2 translate-y-1/2">JACKPOT</p>
                    </div>
                    <div className='flex text-white-main'><MiniPad num={num[0]} /> <MiniPad num={num[1]} /> : <MiniPad num={num[2]} /><MiniPad num={num[3]} />:<MiniPad num={num[4]} /><MiniPad num={num[5]} />:<MiniPad num={num[6]} /><MiniPad num={num[7]} /></div>
                    <div className='font-bold text-white-2 font-montserrat text-4 ml-5'>Last winners</div>
                </div>
                <button className='w-[120px] h-[35px] bg-yellow-main border-2 border-solid border-white-2 bg-opacity-0 text-white-2 font-bold text-4 font-montserrat'>Connect</button>
            </div>
        </>
    )
}

export default AppBar;