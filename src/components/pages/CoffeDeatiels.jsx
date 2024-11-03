import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite, getLocal } from "../../utils";

const CoffeDeatiels = () => {
  const pram = useParams();
  const allData = useLoaderData();
  const [coffee, setCoffee] = useState({});
  useState(() => {
    const singelData = allData.find((item) => item.id == pram.id);
    setCoffee(singelData);
  }, [allData, pram]);
  const {
    name,
    image,
    category,
    making_process,
    description,
    nutrition_info,
    ingredients,
    origin,
    popularity,
    rating,
    type,
    id,
  } = coffee || {};
  const handelFav = (coffee)=>{
    addFavorite(coffee);
  }
  return (
    <div className="mt-8 mb-8">
      <div className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img className="w-full h-[700px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <button onClick={()=>handelFav(coffee)} className="btn btn-warning text-white">add Favorite</button>
          <div className="text-left">
            <p>Description: {description}</p>
            <p>Making Process: {making_process}</p>
            
            <p>Catagory: {category}</p>
            <p>Origin: {origin}</p>
            <p>Type: {type}</p>
            <p>popularity: {popularity}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeDeatiels;
