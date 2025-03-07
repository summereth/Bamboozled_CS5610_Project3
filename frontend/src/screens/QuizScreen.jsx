import { Container } from "react-bootstrap";
import useQuiz from "../contexts/useQuiz.js";
import Loader from "../components/Loader.jsx";
import Error from "./quiz/Error.jsx";
import StartScreen from "./quiz/StartScreen.jsx";

export default function QuizScreen() {
  const { status } = useQuiz();
  return (
    <Container>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen />}
      {status === "active" && <h2>Quiz in progress...</h2>}
      {status === "finished" && <h2>Quiz finished!</h2>}
    </Container>
  );
}
