import React from "react";

const Zoowi = () => {
  return (
    <div className="bg-white text-black p-5 ">
      <h1 className="font-bold text-3xl">Zoowi</h1>
      <ul className="list-disc list-inside mx-2 my-1">
        <li className="my-1">
          Imlemented an Agile development method along with component and game
          technologies including C#, and Unity Game Engine.
        </li>

        <li className="my-1">
          Worked with a small team of developers to transform our university
          campus into an interactive, 3D, open world game, using unity Game
          Engine.
        </li>
        <li className="my-1">
          Designed quest storyboards and dialogue trees, using C# scripts to
          interact with objects in unity.
        </li>
        <li className="my-1">
          Developed a companion android application, which implemented the
          Google Maps API to aid students in navigation around campus.
        </li>
        <li className="font-bold my-1">
          KEY SKILLS: Collaboration, C#, Android Development, User experience
        </li>
      </ul>
      <a
        href="https://github.com/cjwsugden/ZOOWI"
        className="text-white font-bold bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 mx-4 my-2 inline-block"
        target="_blank"
      >
        Github
      </a>
      <a
        href="https://drive.google.com/file/d/1f6e4NO3Tyvh3lBEp73oEzB4D_bmw7j58/view?usp=sharing"
        className="text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mx-4 my-2 inline-block"
        target="_blank"
      >
        Design Document
      </a>
      <a
        href="https://sites.google.com/view/zoowi-website/home?authuser=0"
        className="text-white font-bold bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-300 rounded-lg text-sm px-5 py-2.5 mx-4 my-2 inline-block"
        target="_blank"
      >
        Game Site
      </a>
    </div>
  );
};

export default Zoowi;
