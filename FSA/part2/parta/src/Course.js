import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <CourseName courseName={course.name} />
      <Parts parts={course.parts} />
      <SumOfAll parts={course.parts} />
    </div>
  );
};

const CourseName = ({ courseName }) => {
  return <h2>{courseName}</h2>;
};

const Parts = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part name={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};

const Part = ({ name, exercise }) => {
  return (
    <div>
      {name} {exercise}
    </div>
  );
};

const SumElement = ({ sum }) => {
  return <div>Total of {sum} exercises </div>;
};

const SumOfAll = ({ parts }) => {
  const totalSum = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return <SumElement sum={totalSum} />;
};

export default Course;
