import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuizCard from "../components/QuizCard";
import { useEffect, useState } from "react";
import Loader from "../components/Loader.jsx";
import { toast } from "react-toastify";
import useLocalStorageState from "../hooks/useLocalStorageState.js";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [highestScores] = useLocalStorageState({}, "highestScores");

  useEffect(() => {
    fetch("/api/quiz")
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch((error) => {
        console.error("[HomeScreen] Error fetching quizzes: ", error);
        toast.error(
          "An error occurred while fetching quizzes: " + error.message,
        );
        setError(error.message || "An error occurred while fetching quizzes");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Container className="py-4">
      {isLoading ? (
        <Loader />
      ) : (
        !error && (
          <Row>
            {quizzes.map((quiz) => (
              <Col key={quiz._id} sm={12} md={6} lg={4} xl={4}>
                <Link
                  to={`/quiz/${quiz._id}`}
                  className="text-decoration-none text-dark"
                >
                  <QuizCard
                    title={quiz.name}
                    description={quiz.description}
                    questions={quiz.questions.length}
                    highestScore={highestScores[quiz._id] || undefined}
                    totalPoints={quiz.totalPoints}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        )
      )}
    </Container>
  );
}
