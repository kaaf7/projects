import React from "react";
import Header from "./Header";
import Container from "./Container";
import ExerciseComponent from "./ExerciseComponent";
import PartComponent from "./PartComponent";
import Footer from "./Footer";
import NewFeedBackHeader from "./NewFeedBackHeader";
import NewButton from "./NewButton";
import { useState } from "react";
import Body from "./Body";
const App = () => {
  //useStates for all states
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [show, setShow] = useState(true);

  // handling changes in rating
  const handleGoodResults = () => {
    setGood(good + 1);
    console.log(good);
  };
  const handleBadResults = () => {
    setBad(bad + 1);
    console.log(bad);
  };
  const handleNeutralResults = () => {
    setNeutral(neutral + 1);
    console.log(neutral);
  };
  // variables for average ratings and percentages
  const averageNumbers = Math.floor((good + neutral) / 3);
  const totalRating = good + bad + neutral;

  //condition for when to show the rating percentage
  let positiveRatingpercentage = 0;
  if (good == 0 && bad == 0 && neutral == 0) {
    positiveRatingpercentage = 0;
  } else {
    positiveRatingpercentage = (good / totalRating).toLocaleString("en", {
      style: "percent",
    });
  }

  const Statistics = () => {
    return (
      <div>
        <Body ratingNumber={"good" + " " + good} />
        <Body ratingNumber={"neutral" + " " + neutral} />
        <Body ratingNumber={"bad" + " " + bad} />
        <Body bodyIndication="all" ratingNumber={totalRating} />
        <Body bodyIndication="average" ratingNumber={averageNumbers} />
        <Body
          bodyIndication="positive"
          ratingNumber={positiveRatingpercentage}
        />
      </div>
    );
  };

  return (
    <Container>
      <NewFeedBackHeader headerText="give feedback" className="fHeader" />
      <Container>
        <NewButton buttonText="good" handleClick={handleGoodResults} />
        <NewButton buttonText="neutral" handleClick={handleNeutralResults} />
        <NewButton buttonText="bad" handleClick={handleBadResults} />
      </Container>
      <Body ratingNumber="statistics" />
      <Container>{show  && <Statistics />}</Container>
    </Container>
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
