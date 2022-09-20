import React from 'react';

const MiniPad = (props) => {
    return (
        <div className='w-[20px] h-[26px] text-center mx-1 font-bold font-montserrat text-4 bg-dark-1 text-white-main border border-solid border-yellow-main pt-[2px]'>
            {props.num}
        </div>
    )
}

export default MiniPad;