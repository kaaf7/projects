import logo from "./logo.svg";
import "./App.css";
import "./Components/Header";
import "./Components/ExpenseItem";
import "./Components/FirstFunctionComponent";
import Header from "./Components/Header";
import ExpenseItem from "./Components/ExpenseItem";
import Title from "./Components/Title";
import Amount from "./Components/Amount";
import Date from "./Components/Date";
import Card from "./Components/Card";
function App() {
  return (
    <Card>
      <Title headline=" this is  headline"></Title>
      <Date></Date>
      <Amount></Amount>
      <ExpenseItem
        expenses="these are expenses"
        newexpenses=" these are new expenses"
      ></ExpenseItem>
    </Card>
  );
}

export default App;
