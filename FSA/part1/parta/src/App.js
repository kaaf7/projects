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
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  let randomAnecdotes = anecdotes[Math.floor(Math.random() * anecdotes.length)];
  //useStates for all states
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(0);

  // handling changes in rating
  const handleGoodResults = () => {
    setGood(good + 1);
    setShow(true);
  };
  const handleBadResults = () => {
    setBad(bad + 1);
    setShow(true);
  };
  const handleNeutralResults = () => {
    setNeutral(neutral + 1);
    setShow(true);
  };

  const handleResults = () => {
    setGood(0);
    setBad(0);
    setNeutral(0);
    setShow(false);
  };

  const handleAnecdotes = () => {
    const lengthOfArray = anecdotes.length;
    setSelected(Math.floor(Math.random() * lengthOfArray));
  };

  const rateAnecdotes = () => {};

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

  const NoDataComp = () => {
    return <p>no data to display</p>;
  };

  return (
    <Container>
      <NewFeedBackHeader headerText="give feedback" className="fHeader" />
      <Container>
        <NewButton buttonText="good" handleClick={handleGoodResults} />
        <NewButton buttonText="neutral" handleClick={handleNeutralResults} />
        <NewButton buttonText="bad" handleClick={handleBadResults} />
        <NewButton buttonText="reset" handleClick={handleResults} />
      </Container>
      <Body ratingNumber="statistics" />
      <Container>{show ? <Statistics /> : <NoDataComp />}</Container>

      <Container>
        <Body ratingNumber={anecdotes[selected]} />
      </Container>
      <Container>
        <NewButton
          buttonText="select anecdotes"
          handleClick={handleAnecdotes}
        />
        <NewButton buttonText="rate anecdotes" handleClick />
      </Container>
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
