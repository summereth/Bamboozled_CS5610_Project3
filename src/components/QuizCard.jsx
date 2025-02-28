import { Card } from "react-bootstrap";
import { BsQuestionCircleFill, BsTrophyFill } from "react-icons/bs";

export default function QuizCard({
  title,
  description,
  questions,
  highestScore,
}) {
  return (
    <Card className="my-4 p-2 rounded">
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted small">
          {description || "Quiz Description"}
        </Card.Text>
        <div className="d-flex mt-3">
          <div className="me-3">
            <span className="d-flex align-items-center">
              <BsQuestionCircleFill className="text-secondary me-2" size={12} />
              <small>{questions} questions</small>
            </span>
          </div>
          <div>
            <span className="d-flex align-items-center">
              <BsTrophyFill className="text-warning me-2" size={12} />
              <small>Highest Score: {highestScore}/100</small>
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
