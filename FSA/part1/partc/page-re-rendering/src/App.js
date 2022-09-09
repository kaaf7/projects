import { useState } from "react";
import Display from "./Display";
// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const increaseByOne = () => {
//     setCounter(counter + 1);
//     console.log("State Of Counter is ", counter);
//   };
//   const setToZer0 = () => {
//     setCounter(0);
//     console.log("State Of Counter is ", counter);
//   };
//   const decreaseByOne = () => {
//     setCounter(counter - 1);
//     console.log("State Of Counter is ", counter);
//   };

//   return (
//     <div>
//       <Display counter={counter} />
//       <button onClick={increaseByOne} text="plus">
//         Plus
//       </button>
//       <button onClick={setToZer0} text="zero">
//         Zero
//       </button>
//       <button onClick={decreaseByOne}>Minus</button>
//     </div>
//   );
// };
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div> the app is used by pressing the buttons </div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const [allClicks, setAll] = useState([]);
  const handleLeftClick = () => {
    allClicks.push("L");
    setAll(allClicks);
    setLeft(left + 1);

    console.log(allClicks);
  };
  const handleRightClick = () => {
    allClicks.push("R");
    setAll(allClicks);
    setRight(right + 1);
    console.log(allClicks);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="Left" />
      <Button handleClick={handleRightClick} text="Right" />
      {right}
      <History allClicks={allClicks} />
      <p>{allClicks.join(" ")}</p>
    </div>
  );
};

export default App;
