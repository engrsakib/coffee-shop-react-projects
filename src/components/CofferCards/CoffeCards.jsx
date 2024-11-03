import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Heading from '../Headding/Heading';
import Cards from '../Cards/Cards';

const CoffeCards = () => {
    const data = useLoaderData();
    const { category } = useParams();
    const [coffes, setCoffes] = useState([]);
    // console.log(data);
    useEffect(()=>{
        const filterCoffee = [...data].filter(coffee => coffee.category === category);
        setCoffes(filterCoffee);
    },[category, data]);
    return (
        <div>
            <Heading title={category}></Heading>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    coffes.map((card, index) => <Cards key={index} card={card}></Cards>)
                }
            </div>
        </div>
    );
};

export default CoffeCards;