import React from 'react';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            {/* navBar */}
            <NavBar></NavBar>
            {/* daynamic section */}
            <section className='min-h-[calc(100vh-300px)]'>
            <Outlet></Outlet>
            </section>
            {/* daynamic end */}
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;