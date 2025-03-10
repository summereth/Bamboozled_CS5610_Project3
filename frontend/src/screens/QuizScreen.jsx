import { Container } from "react-bootstrap";
import useQuiz from "../contexts/useQuiz.js";
import Loader from "../components/Loader.jsx";
import Error from "./quiz/Error.jsx";
import StartScreen from "./quiz/StartScreen.jsx";
import Question from "../components/Question.jsx";
import Progress from "../components/Progress.jsx";
import Footer from "../components/Footer.jsx";

export default function QuizScreen() {
  const { status } = useQuiz();
  return (
    <Container className="quiz">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen />}
      {status === "active" && (
        <>
          <Progress />
          <Question />
          <Footer />
        </>
      )}
      {status === "finished" && <h2>Quiz finished!</h2>}
    </Container>
  );
}
