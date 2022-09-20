import React from 'react';
import bigpad from '../../assets/bigpad.png';

const BigPad = (props) => {

    return (
        <>
            <div className='relative totalBox'>
                <div className='absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 md:text-7 font-play text-yellow-main leading-13'>
                    {props.num}
                </div>
            </div>
        </>
    )
}

export default BigPad;