import React from 'react';
import { Link } from 'react-router-dom';
import Catagory from './Catagory';

const Catagories = ({catagories}) => {
    return (
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <div className='flex items-center justify-center mt-8 mb-8'>
            {catagories.map((catagory) => (
              <Catagory key={catagory.id} catagory={catagory}></Catagory>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Catagories;