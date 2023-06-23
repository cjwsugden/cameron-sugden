import React from "react";
import moka from "../assets/moka.jpeg";

const Experience = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col justify-center h-screen w-full md:w-3/4 text-slate-800"
    >
      <div className="experience flex w-full md:w-3/4 bg-stone-50 rounded-lg p-3">
        <img className="exp-img rounded-full m-auto " src={moka} />
        <div className="exp-desc w-full relative px-5">
          <h1 className="font-bold text-2xl">
            Lead Coding Mentor - Makers at Moka
          </h1>
          <span className="text-xs font-bold align-baseline ">
            Trinidad and Tobago
          </span>
          <span className="absolute right-0 text-xs italic align-baseline">
            June 2022 - August 2022
          </span>
          <ul className=" list-disc mx-4 ">
            <li>
              Tutored classes of 15 students from the ages of 13 – 17 in Arduino
            </li>
            <li>
              Lead classes of 10 students in HTML, CSS, and JavaScript for the
              purpose of simple game development
            </li>
            <li className="font-bold">
              KEY SKILLS: Arduino, HTML, CSS, JavaScript, Leadership
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Experience;
