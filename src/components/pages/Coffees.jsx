import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';

const Coffees = () => {
    const data = useLoaderData();
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((card, index) => (
            <Cards key={index} card={card}></Cards>
          ))}
        </div>
      </div>
    );
};

export default Coffees;