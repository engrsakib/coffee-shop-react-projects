import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <Link to='/' className="btn btn-ghost text-xl">Sakib's Coffee Shops</Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-8 text-2xl">
              <Link to="/">
                Home
              </Link>
              <Link to="/coffees">
                coffees
              </Link>
              <Link to="/dashboard">
                Dashboard
              </Link>
              
            </ul>
          </div>
        </div>
      </div>
    );
};

export default NavBar;