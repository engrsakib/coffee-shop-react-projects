import React from 'react';
import { useParams } from 'react-router-dom';

const CoffeCards = () => {
    const obj = useParams();
    console.log(obj);
    return (
        <div>
            <h1>coffer cards.....</h1>
        </div>
    );
};

export default CoffeCards;