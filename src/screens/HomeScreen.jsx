import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuizCard from "../components/QuizCard";

const quizzes = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner - Quiz 1",
    description:
      "Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. Quiz Description. ",
    questions: 50,
    highestScore: 98,
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner - Quiz 2",
    description: "Quiz Description",
    questions: 50,
    highestScore: 98,
  },
  {
    id: 3,
    title: "AWS Certified Cloud Practitioner - Quiz 3",
    description: "Quiz Description",
    questions: 50,
    highestScore: 98,
  },
  {
    id: 4,
    title: "React Knowledge - Quiz 1",
    description: "Quiz Description",
    questions: 50,
    highestScore: 98,
  },
  {
    id: 5,
    title: "React Knowledge - Quiz 2",
    description: "Quiz Description",
    questions: 50,
    highestScore: 98,
  },
  {
    id: 6,
    title: "React Knowledge - Quiz 3",
    description: "Quiz Description",
    questions: 50,
    highestScore: 98,
  },
  {
    id: 7,
    title: "FRIENDS TV Show Knowledge - Quiz 1",
    description: "Quiz Description",
    questions: 50,
    highestScore: 98,
  },
  {
    id: 8,
    title: "FRIENDS TV Show Knowledge - Quiz 2",
    description: "Quiz Description",
    questions: 50,
    highestScore: 98,
  },
  {
    id: 9,
    title: "FRIENDS TV Show Knowledge - Quiz 3",
    description: "Quiz Description",
    questions: 50,
    highestScore: 98,
  },
];

export default function HomeScreen() {
  return (
    <Container className="py-4">
      <Row>
        {quizzes.map((quiz) => (
          <Col key={quiz.id} sm={12} md={6} lg={4} xl={4}>
            <Link
              to={`/quiz/${quiz.id}`}
              className="text-decoration-none text-dark"
            >
              <QuizCard
                title={quiz.title}
                description={quiz.description}
                questions={quiz.questions}
                highestScore={quiz.highestScore}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
