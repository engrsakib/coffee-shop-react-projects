import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({ catagory }) => {
    // console.log(catagory);
  return ( 
    <>
      <Link to={`/category/${catagory.category}`} role="tab" className="tab">
        <span className="text-2xl hover:bg-green-950 hover:text-white p-4 rounded-md">
          {catagory.category}
        </span>
      </Link>
    </>
  );
};

export default Catagory;