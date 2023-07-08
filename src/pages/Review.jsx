import React, { useState } from "react";
import { one } from "../assets";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//prepare image path for each alphabet
const Alphabet = ({ character, imagePath }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="w-12 h-12 rounded-full border-4 border-green-300 hover:bg-green-300 cursor-pointer flex items-center justify-center">
        <span className="text-2xl font-bold" onClick={handleClick}>
          {character}
        </span>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex flex-col gap-10 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <h1 className="text-3xl bg-white w-16">{character}</h1>
            <img src={one} alt={`handsign ${character}`} />
            <button onClick={handleClick} className="text-3xl">
              X
            </button>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

const Review = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl italic font-serif mb-5">Review</h1>
      <div className="flex flex-row flex-wrap w-2/3 ml-auto mr-auto gap-2 max-w-3xl items-center justify-center">
        {alphabets.map((character, index) => (
          <Alphabet key={index} character={character} imagePath="imagepath" />
        ))}
      </div>
    </div>
  );
};

export default Review;
