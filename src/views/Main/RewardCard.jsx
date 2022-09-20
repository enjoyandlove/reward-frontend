import React from 'react';
import { createPortal } from 'react-dom';
import reward1 from '../../assets/reward1.png';
import reward2 from '../../assets/reward2.png';
import reward3 from '../../assets/reward3.png';
import reward4 from '../../assets/reward4.png';
import reward5 from '../../assets/reward5.png';
import reward6 from '../../assets/reward6.png';
import reward7 from '../../assets/reward7.png';
import reward8 from '../../assets/reward8.png';


const RewardCard = (props) => {
    const { image, compensation, title } = props;

    return (
        <>
            <div className='flex items-center py-3 h-[120px] bg-dark-main border-2 border-solid border-white-3 pr-5 hover-item'>
                <div className='px-5'>
                    {image == 'reward1' && <img src={reward1} alt='reward' />}
                    {image == 'reward2' && <img src={reward2} alt='reward' />}
                    {image == 'reward3' && <img src={reward3} alt='reward' />}
                    {image == 'reward4' && <img src={reward4} alt='reward' />}
                    {image == 'reward5' && <img src={reward5} alt='reward' />}
                    {image == 'reward6' && <img src={reward6} alt='reward' />}
                    {image == 'reward7' && <img src={reward7} alt='reward' />}
                    {image == 'reward8' && <img src={reward8} alt='reward' />}
                </div>
                <div>
                    <p className='text-6 text-white-2 leading-2 font-montserrat'>{compensation}</p>
                    <p className='text-8 font-bold text-white-main leading-2 font-montserrat'>{title}</p>
                </div>
            </div>
        </>
    )
}

export default RewardCard;