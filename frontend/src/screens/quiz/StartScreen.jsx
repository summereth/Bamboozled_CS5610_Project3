import useQuiz from "../../contexts/useQuiz";

function StartScreen() {
  const { quizName, quizDescription, questionNum, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to {quizName}</h2>
      <h3>{quizDescription}</h3>
      <h3>{questionNum} questions to test your mastery!</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start!
      </button>
    </div>
  );
}

export default StartScreen;
