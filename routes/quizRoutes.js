import { Router } from "express";
import {
  insertOneQuiz,
  fetchAllQuizzes,
  fetchQuizById,
  updateOneQuizById,
  deleteOneQuizById,
} from "../db/quizes.js";

async function getQuizes(req, res) {
  try {
    const { keyword } = req.query || "";
    const quizzes = await fetchAllQuizzes(keyword);
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

async function updateQuiz(req, res) {
  // validate req.body
  if (!req.body.name) {
    res.status(400).send("A new name is required");
    return;
  }

  try {
    const result = await updateOneQuizById(req.params.id, {
      name: req.body.name,
    }); // ignore any other modifications except name
    res.json(result);
  } catch (error) {
    console.error("[Server] Error updating quiz:", error);
    res.status(500).send(error);
  }
}

async function deleteQuiz(req, res) {
  try {
    const result = await deleteOneQuizById(req.params.id);
    res.json(result);
  } catch (error) {
    console.error("[Server] Error deleting quiz:", error);
    res.status(500).send(error);
  }
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
router.route("/:id").get(getQuizById).patch(updateQuiz).delete(deleteQuiz);
router.post("/create", createQuiz);

export default router;
