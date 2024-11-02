import React from 'react';
import Banner from '../Banner/Banner';
import Heading from '../Headding/Heading';

const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* headding */}
            <Heading title={"Browse Coffees by Category"} subTitle={"choose your desierd coffed categories to browse through spesafic coffees that your fits tests"}></Heading>
            {/* catagories */}
            {/* daynamic nasted */}
        </div>
    );
};

export default Home;