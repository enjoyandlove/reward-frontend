import React from 'react';
import financelogo from '../../assets/finance-logo.png';

const Footer = () => {
    return (
        <>
            <div className='flex justify-between items-center relative h-[90px] border-t border-white-6 border-solid px-10'>
                <div>
                    <img src={financelogo} alt='finance logo' />
                </div>
                <div className='flex text-white-2 font-bold font-montserrat text-4'>
                    <p className='border-r border-solid border-white-6 pr-4'>For projects</p>
                    <p className='pl-4 '>For service providers</p>
                </div>
                <p className='text-yellow-main font-bold font-montserrat text-4'>Convert dVouchers to project tokens</p>
            </div>
        </>
    )
}

export default Footer;