import { Router } from "express";

function getQuizes(req, res) {
  console.log("GET /", req);
  res.send("hello world");
}

function getQuizById(req, res) {
  console.log("GET /:id", req);
  res.send("hello world");
}

function updateQuiz(req, res) {
  console.log("PUT /:id", req);
  res.send("hello world");
}

function deleteQuiz(req, res) {
  console.log("DELETE /:id", req);
  res.send("hello world");
}

function createQuiz(req, res) {
  console.log("POST /create", req);
  res.send("hello world");
}

const router = Router();
router.get("/", getQuizes);
router.route("/quiz/:id").get(getQuizById).put(updateQuiz).delete(deleteQuiz);
router.post("/create", createQuiz);

export default router;
