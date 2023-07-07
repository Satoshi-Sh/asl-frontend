import React from "react";
import { Unit } from "../components";

const Challenges = () => {
  const lessons = [
    {
      unit: 1,
      description: "lesson content about sign language",
      completed: true,
    },
    {
      unit: 2,
      description: "lesson content about fingerspelling",
      completed: true,
    },
    {
      unit: 3,
      description: "lesson content about sign language",
      completed: true,
    },
    {
      unit: 4,
      description: "lesson content about fingerspelling",
      completed: true,
    },
    {
      unit: 5,
      description: "lesson content about sign language",
      completed: false,
    },
    {
      unit: 6,
      description: "lesson content about fingerspelling",
      completed: false,
    },
  ];
  return (
    <div className="text-center">
      <h2 className="pt-20 text-lg italic">Welcome Back</h2>
      <h3 className="mb-3 text-4xl font-extrabold">Michelle</h3>
      <h4 className="mb-3 text-2xl text-gray-400 italic">Choose Unit</h4>
      <div className="flex flex-row flex-wrap content-center justify-center max-w-2xl mr-auto ml-auto mb-10">
        {lessons.map((lesson) => {
          return <Unit lesson={lesson} />;
        })}
      </div>
    </div>
  );
};

export default Challenges;
