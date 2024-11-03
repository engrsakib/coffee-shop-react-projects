import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";

const Coffees = () => {
  const data = useLoaderData();
  const [sortCoffe, setSortCoffe] = useState(data);
  const handleSort = (sortedBy) => {
    if (sortedBy === "popularity") {
    //   console.log(sortedBy);
    const sorted = [...data].sort((a,b)=> b.popularity - a.popularity);
    setSortCoffe(sorted);
    } else {
    //   console.log(sortedBy);
    const sorted = [...data].sort((a, b) => b.rating - a.rating);
    setSortCoffe(sorted);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-thin">
            Coffee&apos;s by Popularity & Rating-&gt;
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning"
          >
            Sort by popularity
          </button>
          <button
            className="btn btn-warning"
            onClick={() => handleSort("rating")}
          >
            Sort by rating
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sortCoffe.map((card, index) => (
            <Cards key={index} card={card}></Cards>
          ))}
        </div>
      </div>
    </>
  );
};

export default Coffees;
