const NewButton = (props) => {
  return <button onClick={props.handleClick}>{props.buttonText} {props.rating}</button>;
};
export default NewButton;
