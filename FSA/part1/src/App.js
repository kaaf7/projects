import React from "react";
import Header from "./Header";
import Container from "./Container";
import ExerciseComponent from "./ExerciseComponent";
import PartComponent from "./PartComponent";
import Footer from "./Footer";

const App = () => {
  const exerciseNum = "Number of exercises";

  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  const FullPage = () => {
    return (
      <div>
        <Header course={course.name} />
        <PartComponent
          name={course.parts[0].name}
          exercise={course.parts[0].exercises}
        />
        <PartComponent
          name={course.parts[1].name}
          exercise={course.parts[1].exercises}
        />
        <PartComponent
          name={course.parts[2].name}
          exercise={course.parts[2].exercises}
        />
        <Footer
          exerciseNumber={exerciseNum}
          exerciseCount={
            course.parts[0].exercises +
            course.parts[1].exercises +
            course.parts[2].exercises
          }
        />
      </div>
    );
  };

  console.log(Header);
  return <FullPage />;
};

export default App;
