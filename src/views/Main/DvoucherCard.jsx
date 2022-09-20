import React from 'react';
import dvoucher1 from '../../assets/dvoucher1.png';
import dvoucher2 from '../../assets/dvoucher2.png';
import dvoucher3 from '../../assets/dvoucher3.png';
import dvoucher4 from '../../assets/dvoucher4.png';
import atom1 from '../../assets/atom1.png';
import atom2 from '../../assets/atom2.png';
import atom3 from '../../assets/atom3.png';
import atom4 from '../../assets/atom4.png';

const DvoucherCard = (props) => {

    const { image, compensation, title } = props;
    return (
        <>
            <div>
                {image == 'dvoucher1' &&
                    <div className='typeOfV bronze'>
                        <div className='flex py-4 pr-12 mb-2 h-[120px] items-center border-2 border-solid border-white-3'>
                            <div className='px-4 relative'>
                                <div><img src={dvoucher1} alt='dvoucher' /></div>
                                <div className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'><img src={atom1} alt='atom' /></div>
                            </div>
                            <p className='text-8 leading-2 text-yellow-2 font-bold font-montserrat'>{compensation}</p>
                        </div>
                        <p className='text-6 leading-2 text-yellow-2 font-montserrat'>{title}</p>
                    </div>
                }
                {image == 'dvoucher2' &&
                    <div className='typeOfV silver'>
                        <div className='flex py-4 pr-12 mb-2 h-[120px] items-center border-2 border-solid border-white-3'>
                            <div className='px-4 relative'>
                                <div><img src={dvoucher2} alt='dvoucher' /></div>
                                <div className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'><img src={atom2} alt='atom' /></div>
                            </div>
                            <p className='text-8 leading-2 text-white-5 font-bold font-montserrat'>{compensation}</p>
                        </div>
                        <p className='text-6 leading-2 text-white-5 font-montserrat'>{title}</p>
                    </div>
                }
                {image == 'dvoucher3' &&
                    <div className='typeOfV gold'>
                        <div className='flex py-4 pr-12 mb-2 h-[120px] items-center border-2 border-solid border-white-3'>
                            <div className='px-4 relative'>
                                <div><img src={dvoucher3} alt='dvoucher' /></div>
                                <div className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'><img src={atom3} alt='atom' /></div>
                            </div>
                            <p className='text-8 leading-2 text-yellow-1 font-bold font-montserrat'>{compensation}</p>
                        </div>
                        <p className='text-6 leading-2 text-yellow-1 font-montserrat'>{title}</p>
                    </div>
                }
                {image == 'dvoucher4' &&
                    <div className='typeOfV platinum'>
                        <div className='flex py-4 pr-12 mb-2 h-[120px] items-center border-2 border-solid border-white-3'>
                            <div className='px-4 relative'>
                                <div><img src={dvoucher4} alt='dvoucher' /></div>
                                <div className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'><img src={atom4} alt='atom' /></div>
                            </div>
                            <p className='text-8 leading-2 text-white-1 font-bold font-montserrat'>{compensation}</p>
                        </div>
                        <p className='text-6 leading-2 text-white-1 font-montserrat'>{title}</p>
                    </div>
                }
            </div>
        </>
    )
}

export default DvoucherCard;