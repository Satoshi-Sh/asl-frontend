import React from "react";
import { landing } from "../assets";
import { useNavigate } from "react-router-dom";
const TextDiv = ({ title, paragraph }) => {
  return (
    <div className="pl-14 pr-14 pb-4">
      <h3 className="text-4xl italic font-serif m-3">{title}</h3>
      <p className="first-letter:pl-2 first-letter:italic">{paragraph} </p>
    </div>
  );
};

const Landing = () => {
  const navigate = useNavigate();
  const moveSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl italic font-serif">Learn ASL</h1>
      <div className="p-5 max-w-4xl max-h-3xl pb-14">
        <img src={landing} alt="5 hand sign drawings" />
      </div>
      <TextDiv
        title="App"
        paragraph="An ASL (American Sign Language) training application that utilizes a
      machine learning model to detect users' sign language through the
      camera and keeps records of their progress can be a powerful tool for
      learning and practicing sign language."
      />
      <TextDiv
        title="American Sign Language (ASL)"
        paragraph="A natural language that serves as the predominant sign language of Deaf communities in the United States of America and most of Anglophone Canada. ASL is a complete and organized visual language that is expressed by employing both manual and nonmanual features."
      />
      {/* no need for logged in user?? */}
      <div className="m-10 flex flex-row flex-wrap gap-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white w-32 font-bold py-2 px-4 rounded m-5 ml-auto mr-auto">
          Play Demo
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white w-32 font-bold py-2 px-4 rounded m-5 ml-auto mr-auto"
          onClick={moveSignup}
        >
          Signup
        </button>
      </div>
      {/*maybe put youtube video here */}
    </div>
  );
};

export default Landing;
