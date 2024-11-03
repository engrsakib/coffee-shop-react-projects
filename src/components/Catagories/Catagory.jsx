import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Catagory = ({ catagory }) => {
    // console.log(catagory);
  return (
    <>
      <NavLink
        to={`/category/${catagory.category}`}
        role="tab"
        className={({ isActive }) => `tab ${isActive ? 'tab-active text-red' :''}`}
      >
        <span className="text-2xl hover:bg-green-950 hover:text-white p-4 rounded-md">
          {catagory.category}
        </span>
      </NavLink>
    </>
  );
};

export default Catagory;