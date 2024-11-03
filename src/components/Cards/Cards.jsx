import React from 'react';
import { FaStar } from "react-icons/fa";
const Cards = ({card}) => {
    const { name, image, category, origin, popularity, rating, type} = card || {};
    return (
      <div className="mt-3 bt-3">
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="text-left">
              <p>category: {category}</p>
              <p>Type: {type}</p>
              <p>orgin: {origin}</p>
              <p>popularity: {popularity}</p>
              <p className='flex gap-2'>
                Rating: {rating}{" "}
                <span className='text-orange-500'>
                  <FaStar />
                </span>
              </p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cards;