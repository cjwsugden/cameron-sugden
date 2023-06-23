import React, { useState } from "react";
import phone from "../assets/telephone.png";
import email from "../assets/email.png";

const Contact = React.forwardRef((props, ref) => {
  const [formState, setFormState] = useState({});

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center h-screen w-full md:w-3/4"
    >
      <div className="flex flex-col md:flex-row w-full bg-white h-min p-4">
        <div className="flex flex-row md:flex-col justify-center md:w-1/3">
          <div className="flex flex-col mx-2 my-4 items-center">
            <img src={phone} className="w-min" />
            <p className="text-stone-400">+1(519)868-6730</p>
          </div>
          <div className="flex flex-col mx-2 my-4 items-center">
            <img src={email} className="w-min" />
            <p className="text-stone-400">cjwsugden@gmail.com</p>
          </div>
        </div>
        <form
          className="flex flex-col md:w-2/3"
          id="usrform"
          target="_blank"
          action="https://formsubmit.co/cjwsugden@gmail.com"
          method="POST"
        >
          <h1 className="font-bold text-2xl text-cyan-500">
            Send me a message
          </h1>
          <p>
            If you're interested in working with me or would just like to reach
            out to chat, send me a message.
          </p>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name || ""}
            placeholder="Enter Name"
            className="bg-stone-100 p-2 my-2"
            onChange={changeHandler}
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email || ""}
            placeholder="Enter Email"
            className="bg-stone-100 p-2 my-2"
            onChange={changeHandler}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number"
            className="bg-stone-100 p-2 my-2"
            onChange={changeHandler}
          />
          <textarea
            rows="4"
            cols="50"
            name="message"
            placeholder="Enter Message Here"
            form="usrform"
            value={formState.message || ""}
            className="bg-stone-100 p-2 resize-none"
            onChange={changeHandler}
          ></textarea>
          <button
            type="submit"
            className="text-white font-bold bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-300 rounded-lg text-sm px-5 py-2.5 my-2 inline-block md:w-1/3"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
});

export default Contact;
