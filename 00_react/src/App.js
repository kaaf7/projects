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
function App() {
  return (
    <div>
      <Title></Title>
      <Date></Date>
      <Amount></Amount>
      <ExpenseItem></ExpenseItem>
      <Header></Header>
      <p>react pragaraph</p>
    </div>
  );
}

export default App;
