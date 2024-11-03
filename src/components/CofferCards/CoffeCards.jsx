import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Heading from "../Headding/Heading";
import Cards from "../Cards/Cards";

const CoffeCards = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { category } = useParams();
  const [coffes, setCoffes] = useState([]);
  // console.log(data);
  useEffect(() => {
    if (category) {
      const filterCoffee = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffes(filterCoffee);
    } else {
      setCoffes(data.slice(0, 6));
    }
  }, [category, data]);
  return (
    <>
      <div>
        {/* <Heading title={category}></Heading> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coffes.map((card, index) => (
            <Cards key={index} card={card}></Cards>
          ))}
        </div>
      </div>
      <button
        className="btn btn-warning p-5 float-start mt-3 mb-3"
        onClick={() => navigate("/coffees")}
      >
        Show All
      </button>
    </>
  );
};

export default CoffeCards;
