import Scores from "../Scores/Scores";

const Student = ({student}) => {
  return ( 
    <>
      <h2>{student.name}</h2>
      <h2>{student.bio}</h2>
      {student.scores.map((score, idx) => 
        <Scores key={idx} score={score} />
        )}
    </>
  );
}

export default Student;