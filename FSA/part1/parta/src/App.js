import React from "react";
import Header from "./Header";
import Container from "./Container";
import ExerciseComponent from "./ExerciseComponent";
import PartComponent from "./PartComponent";
import Footer from "./Footer";
import NewFeedBackHeader from "./NewFeedBackHeader";
import NewButton from "./NewButton";
import { useState } from "react";


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <NewFeedBackHeader headerText="give feedback"  className="fHeader"/>
      <NewButton buttonText ="good"/>
      <NewButton buttonText ="neutral" />
      <NewButton buttonText ="bad" />
    </div>
  );

  /*  const exerciseNum = "Number of exercises";

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
        <Footer exerciseNumber={exerciseNum} exerciseCount={
            course.parts[0].exercises +
            course.parts[1].exercises +
            course.parts[2].exercises
          }
        />
      </div>
    );
  };

  console.log(Header); */
};

export default App;
