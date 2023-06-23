import React from "react";

const Nav = ({
  scrollToSection,
  homeRef,
  experienceRef,
  projectsRef,
  contactRef,
}) => {
  return (
    <ul className="flex flex-row text-right list-none top-0 left-0 right-0 justify-center md:fixed md:right-1 md:bottom-0 md:top-0 w-full md:flex-col md:justify-center bg-cyan-500 text-white md:text-gray-500 md:left-auto md:bg-transparent md:w-max fixed">
      <li className="my-2 mx-2">
        <button
          className="transition duration-300 ease-in-out hover:text-white"
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </button>
      </li>
      <li className="my-2 mx-2">
        <button
          className="transition duration-300 ease-in-out hover:text-white"
          onClick={() => scrollToSection(experienceRef)}
        >
          Experience
        </button>
      </li>
      <li className="my-2 mx-2">
        <button
          className="transition duration-300 ease-in-out hover:text-white"
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </button>
      </li>
      <li className="my-2 mx-2">
        <button
          className="transition duration-300 ease-in-out hover:text-white"
          onClick={() => scrollToSection(contactRef)}
        >
          Contact Me
        </button>
      </li>
    </ul>
  );
};

export default Nav;
