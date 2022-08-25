import "./Title.css";

function Title(props) {

  const headline = props.headline;
  return (
    <h1 className="title">{headline}</h1>
);}
export default Title;
