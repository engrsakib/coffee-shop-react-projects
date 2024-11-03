import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div className="bg-white">
        <div className="navbar container z-50 backdrop-blur-xl bg-white/30">
          <div className="navbar-start">
            <NavLink to="/" className="btn btn-ghost text-xl">
              Sakib's Coffee Shops
            </NavLink>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-8 text-2xl">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red-500 rounded-md" : ""
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red-500 rounded-md" : ""
                  }`
                }
                to="/coffees"
              >
                coffees
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "text-red-500 rounded-md" : ""
                  }`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default NavBar;