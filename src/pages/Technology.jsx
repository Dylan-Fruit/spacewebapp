import React, { useState, useEffect } from "react";
import { technology } from "../data";
import Header from "../components/layouts/Header";

const Technology = () => {
  const [techno] = useState(technology);
  const [value, setValue] = useState(0);
  const [isMobile, setIsMobile] = useState();

  const { name, images, description } = techno[value];

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else if (window.innerWidth >= 768) {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="technology">
      <Header />
      <div className="technology_title">
        <span className="technology_title_number">03</span>
        <h1 className="technology_title_text">Space launch 101</h1>
      </div>
      <div className="technology_content">
        <div className="technology_content_text">
          <div className="technology_content_text_button">
            <ul>
              {techno.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setValue(index)}
                    className={value === index ? "active" : ""}
                    id={index === 0 ? "paddingbtn" : ""}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="technology_content_text_area">
            <h2>The terminology</h2>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="technology_content_images">
          <img
            src={isMobile ? images.mobile : images.desktop}
            alt={name}
            title={name}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
