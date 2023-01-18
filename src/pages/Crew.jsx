import React, { useState } from "react";
import Header from "../components/layouts/Header";
import { crew } from "../data";

const Crew = () => {
  const [crewMembers] = useState(crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = crewMembers[value];

  return (
    <div className="crew">
      <Header />
      <div className="crew_title">
        <span className="crew_title_number">02</span>
        <h1 className="crew_title_text">Meet your Crew</h1>
      </div>
      <div className="crew_content">
        <div className="crew_content_text">
          <div className="crew_content_text_box">
            <h2>{role}</h2>
            <h1>{name}</h1>
            <p>{bio}</p>
          </div>
          <div className="crew_content_text_points">
            <ul>
              {crew.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setValue(index)}
                    className={index === value ? "active" : ""}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="crew_content_membersImg">
          <img src={images} alt={name} title={name} />
        </div>
      </div>
    </div>
  );
};

export default Crew;
