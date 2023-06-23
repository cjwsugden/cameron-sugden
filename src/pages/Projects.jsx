import React, { useState } from "react";
import Zoowi from "../comps/Zoowi";

const Projects = React.forwardRef((props, ref) => {
  const [isChildVisible, setIsChildVisible] = useState(false);

  const toggleChildVisibility = () => {
    setIsChildVisible(!isChildVisible);
  };

  return (
    <div
      ref={ref}
      className="w-full md:w-3/4 h-screen flex flex-col justify-center"
    >
      <div className="text-white relative  ">
        <h1
          className="text-3xl md:text-5xl font-bold hover:cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out"
          id="zoowi-link"
          onClick={toggleChildVisibility}
        >
          Gameplay Developer - ZOOWI
        </h1>

        <span className="text-red-600 font-bold text-sm italic">
          Unity Game
        </span>
        <span className="text-sm italic right-0 absolute ">
          January 2022 - May 2022
        </span>
        <div className={`child-container ${isChildVisible ? "visible" : ""}`}>
          {isChildVisible && <Zoowi />}
        </div>
      </div>
    </div>
  );
});

export default Projects;
