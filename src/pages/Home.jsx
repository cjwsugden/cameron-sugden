import React from "react";
import github from "../assets/github-logo.png";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/cv.png";
import Nav from "../comps/Nav";

const Home = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col justify-center h-screen w-full md:w-3/4"
    >
      <h1 className="text-7xl text-white font-semibold">Cameron Sugden</h1>
      <h2 className="text-3xl text-white my-9">Software Developer</h2>
      <h2 className="text-3xl text-gray-500">
        I build accessible, inclusive, products and digital experiences for the
        web.
      </h2>
      <div className="links flex flex-row w-full md:w-5/12 justify-between my-9">
        <a href="https://github.com/cjwsugden" target="_blank">
          <img
            className="transition duration-300 ease-in-out hover:brightness-0 hover:invert hover:scale-110"
            src={github}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/cameron-sugden-408166204/"
          target="_blank"
        >
          <img
            className="transition duration-300 ease-in-out hover:brightness-0 hover:invert hover:scale-110"
            src={linkedin}
          />
        </a>
        <a
          href="https://docs.google.com/document/d/1SegqT8j6TOQcLH_Pny4Z3nS4jLVw8zVO/edit?usp=sharing&ouid=115294528645172828931&rtpof=true&sd=true"
          target="_blank"
        >
          <img
            className="transition duration-300 ease-in-out hover:brightness-0 hover:invert hover:scale-110"
            src={resume}
          />
        </a>
      </div>
    </div>
  );
});

export default Home;
