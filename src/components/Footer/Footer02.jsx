import React from 'react';
import financelogo from '../../assets/finance-logo.png';

const Footer = () => {
    return (
        <>
            <div className='flex justify-between items-center relative md:h-[90px] border-t border-white-6 border-solid px-5 md:px-10 pt-5 pb-[60px] md:py-0 flex-col md:flex-row'>
                <div className='md:w-[20%]'>
                    <img src={financelogo} alt='finance logo' />
                </div>
                <div className='flex flex-col md:flex-row items-center text-white-2 font-bold font-montserrat text-4 py-5 md:py-0'>
                    <p className='md:border-r border-solid border-white-6 md:pr-4'>For projects</p>
                    <p className='md:border-r border-solid border-white-6 md:pr-4 md:pl-4'>For service providers</p>
                    <p className='md:pl-4 '>For events</p>
                </div>
                <p className='md:w-[20%] text-right text-yellow-main font-bold font-montserrat text-4'>Convert dVouchers to project tokens</p>
            </div>
        </>
    )
}

export default Footer;