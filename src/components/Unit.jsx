import React from "react";

const Unit = ({ lesson }) => {
  return (
    <div
      className={
        "border-2 cursor-pointer shadow-md hover:border-emerald-100 w-60 h-60 rounded-lg m-4 " +
        (lesson.completed ? "bg-emerald-100" : null)
      }
    >
      <h1 className="font-serif font-light italic text-2xl mt-3">
        Unit - {lesson.unit}
      </h1>
      <div className="w-1/2 h-1/2 mr-auto ml-auto mt-2 mb-4">
        <img src={lesson.imagePath} alt={`handsign ${lesson.unit}`}></img>
      </div>
      <p>Unit:{lesson.description}</p>
    </div>
  );
};

export default Unit;
