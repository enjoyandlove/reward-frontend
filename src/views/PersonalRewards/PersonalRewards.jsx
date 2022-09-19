import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const PersonalRewards = () => {
    return (
        <>
            <div className='px-28 md:px-56'>
                <div className='flex text-6 font-montserrat text-white-2 leading-[30px]'>
                    <p>Main page</p>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <p className='text-yellow-main'>Personal rewards</p>
                </div>
            </div>
        </>
    )
}

export default PersonalRewards;
