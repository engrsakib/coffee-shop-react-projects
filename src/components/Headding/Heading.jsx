import React from 'react';

const Heading = ({title, subTitle}) => {
    return (
        <div>
            <h1 className='text-5xl mt-3'>{title}</h1>
            <p className='text-2xl text-gray-400 mt-1'>{subTitle}</p>
        </div>
    );
};

export default Heading;