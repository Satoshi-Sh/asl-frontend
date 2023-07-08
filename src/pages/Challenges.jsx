import React from "react";
import { Unit } from "../components";
import { one, two, three, four, five, six } from "../assets";

const Challenges = () => {
  const lessons = [
    {
      unit: 1,
      description: "Alphabet A-L",
      completed: true,
      imagePath: one,
    },
    {
      unit: 2,
      description: "Alphabet M-Z",
      completed: true,
      imagePath: two,
    },
    {
      unit: 3,
      description: "Number 1-20",
      completed: true,
      imagePath: three,
    },
    {
      unit: 4,
      description: "Number 20-50",
      completed: true,
      imagePath: four,
    },
    {
      unit: 5,
      description: "Basic Words",
      completed: false,
      imagePath: five,
    },
    {
      unit: 6,
      description: "Basic Words 2",
      completed: false,
      imagePath: six,
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
