import React from 'react';
import financelogo from '../../assets/finance-logo.png';

const Footer = () => {
    return (
        <>
            <div className='flex justify-between items-center relative md:h-[90px] border-t border-white-6 border-solid px-5 md:px-10 py-5 md:py-0 flex-col md:flex-row'>
                <div className='w-[20%]'>
                    <img src={financelogo} alt='finance logo' />
                </div>
                <div className='flex text-white-2 font-bold font-montserrat text-4 py-5 md:py-0'>
                    <p className='border-r border-solid border-white-6 pr-4'>For projects</p>
                    <p className='border-r border-solid border-white-6 pr-4 pl-4'>For service providers</p>
                    <p className='pl-4 '>For events</p>
                </div>
                <p className='w-[20%] text-right text-yellow-main font-bold font-montserrat text-4'>Convert dVouchers to project tokens</p>
            </div>
        </>
    )
}

export default Footer;