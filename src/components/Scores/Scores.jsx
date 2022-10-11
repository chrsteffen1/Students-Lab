const Scores = ({score}) => {
  return (  
    <>
      <h2>{score.score}</h2>
      <h2>{score.date} </h2>
    </>
  );
}

export default Scores;