import { useState } from "react";
import Button from "./Button";
import FeedBackHeader from "./FeedBackHeader";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div> <Button buttonText="good"/>
      <FeedBackHeader headerText="give feedback" />
     
    </div>
  );
};

export default App;
