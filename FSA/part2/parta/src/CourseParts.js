const CourseParts = (props) => {
  return (
    <li>
      {props.partName}
      {props.partExercises}
    </li>
  );
};

export default CourseParts;
