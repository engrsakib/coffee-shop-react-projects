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
                    isActive ? "bg-red-500 p-5 text-white/75 rounded-md" : "p-5"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-red-500 p-5 text-white/75 rounded-md" : "p-5"
                  }`
                }
                to="/coffees"
              >
                coffees
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-red-500 p-5 text-white/75 rounded-md" : "p-5"
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