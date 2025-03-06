import { Router } from "express";
import { insertOneQuiz, fetchAllQuizzes, fetchQuizById } from "../db/quizes.js";

async function getQuizes(req, res) {
  try {
    const quizzes = await fetchAllQuizzes();
    res.json(quizzes);
  } catch (error) {
    console.error("[Server] Error fetching quizzes:", error);
    res.status(500).send(error);
  }
}

async function getQuizById(req, res) {
  try {
    const quiz = await fetchQuizById(req.params.id);
    if (!quiz) {
      res.status(404).send("Quiz not found");
      return;
    }
    res.json(quiz);
  } catch (error) {
    console.error("[Server] Error fetching quiz by id:", error);
    res.status(500).send(error);
  }
}

function updateQuiz(req, res) {
  console.log("PUT /:id", req);
  res.send("hello world");
}

function deleteQuiz(req, res) {
  console.log("DELETE /:id", req);
  res.send("hello world");
}

async function createQuiz(req, res) {
  // Req validation
  const { name, description, timeLimit, questions } = req.body;
  if (!name || !description || !questions || !questions.length) {
    res.status(400).send("Name, description and questions are required");
    return;
  }
  for (const question of questions) {
    if (
      !question.points ||
      !question.question ||
      !question.options ||
      !question.options.length ||
      question.correctOption === undefined
    ) {
      res
        .status(400)
        .send("Question, points, options and correctOptions are required");
      return;
    }
    if (question.correctOption >= question.options.length) {
      res
        .status(400)
        .send(
          "Invalid correctOption. Please input a number from 0 to n-1, where n is the number of options",
        );
      return;
    }
  }

  const newQuiz = {
    name,
    description,
    timeLimit: timeLimit ? Number(timeLimit) : null,
    questionNum: questions.length,
    totalPoints: questions.reduce(
      (prev, curr) => prev + Number(curr.points),
      0,
    ),
    questions,
  };

  try {
    const result = await insertOneQuiz(newQuiz);
    res.json(result);
  } catch (error) {
    console.error("[Server] Error creating quiz:", error);
    res.status(500).send(error);
  }
}

const router = Router();
router.get("/", getQuizes);
router.route("/:id").get(getQuizById).put(updateQuiz).delete(deleteQuiz);
router.post("/create", createQuiz);

export default router;
