import useQuiz from "../contexts/useQuiz";

function Progress() {
  const { index, questionNum, totalPoints, points, answer } = useQuiz();

  return (
    <header className="progress">
      <progress max={questionNum} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {questionNum}
      </p>

      <p>
        {points} / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
