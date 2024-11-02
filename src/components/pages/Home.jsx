import React from 'react';
import Banner from '../Banner/Banner';
import Heading from '../Headding/Heading';
import Catagories from '../Catagories/Catagories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const catagories = useLoaderData();
    // console.log(catagories)
    return (
      <div>
        {/* banner */}
        <Banner></Banner>
        {/* headding */}
        <Heading
          title={"Browse Coffees by Category"}
          subTitle={
            "choose your desierd coffed categories to browse through spesafic coffees that your fits tests"
          }
        ></Heading>
        {/* catagories */}
        <Catagories catagories={catagories}></Catagories>
        {/* daynamic nasted */}
        <Outlet></Outlet>
      </div>
    );
};

export default Home;