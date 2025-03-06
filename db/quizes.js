import { MongoClient, ObjectId } from "mongodb";

function getClientAndCollection() {
  const mongo_uri = process.env.MONGO_URI || "mongodb://localhost:27017";

  const client = new MongoClient(mongo_uri);
  const db = client.db(process.env.DB_NAME);
  const collection = db.collection("quiz");

  return { client, collection };
}

async function fetchAllQuizzes() {
  const { client, collection } = getClientAndCollection();

  try {
    await client.connect();

    const result = await collection.find().toArray();
    return result;
  } catch (error) {
    console.error("[DB] Error getting all quizzes: ", error);
    throw error;
  } finally {
    if (client) {
      await client.close();
    }
  }
}

async function fetchQuizById(id) {
  const { client, collection } = getClientAndCollection();

  try {
    await client.connect();

    const result = await collection.findOne({ _id: new ObjectId(id) });
    return result;
  } catch (error) {
    console.error("[DB] Error getting quiz by id: ", error);
    throw error;
  } finally {
    if (client) {
      await client.close();
    }
  }
}

async function insertOneQuiz(quiz) {
  const { client, collection } = getClientAndCollection();
  const newQuiz = {
    ...quiz,
    questions: quiz.questions.map((question) => ({
      ...question,
      _id: new ObjectId(),
      points: Number(question.points),
      correctOption: Number(question.correctOption),
    })),
  };

  try {
    await client.connect();

    const result = await collection.insertOne(newQuiz);
    return result;
  } catch (error) {
    console.error("[DB] Error inserting plan: ", error);
    throw error;
  } finally {
    if (client) {
      await client.close();
    }
  }
}

export { insertOneQuiz, fetchAllQuizzes, fetchQuizById };
