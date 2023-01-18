import React, { useState } from "react";
//import data from "../data";
import { destinations } from "../data";
import Header from "../components/layouts/Header";

const Destination = () => {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];

  return (
    <div className="destination">
      <Header />
      <div className="destination_title">
        <span className="destination_title_number">01</span>
        <h1 className="destination_title_text">Pick your destination</h1>
      </div>
      <div className="destination_content">
        <div className="destination_content_planets">
          <img src={images} alt={name} title={name} />
        </div>
        <div className="destination_content_text">
          <div className="destination_content_text_name">
            <ul>
              {planets.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setValue(index)}
                    className={index === value ? "active" : ""}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="destination_content_text_planetName">
            <h1>{name}</h1>
          </div>
          <div className="destination_content_text_description">
            <p>{description}</p>
          </div>
          <div className="line"></div>
          <div className="destination_content_text_travel">
            <div className="destination_content_text_travel_distance">
              <span>avg. distance</span>
              <p>{distance}</p>
            </div>
            <div className="destination_content_text_travel_time">
              <span>est. travel time</span>
              <p>{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
