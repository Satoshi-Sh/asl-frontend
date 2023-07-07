import React from "react";

const Unit = ({ lesson }) => {
  console.log(lesson);
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
      <p>Unit:{lesson.description}</p>
    </div>
  );
};

export default Unit;
