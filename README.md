## GenAI usage

Claude 3.5 Sonnet assisted me in finishing this project.

### Use cases

#### File download and upload

- Prompt: In CreateQuizScreen, how should I provide the template to download. Can I put my template file in public or assets folder?

- Prompt:
  In handleFileChange function from CreateQuizScreen.jsx, how can I read data from file that user uploaded

#### MongoDB related

- Prompt:

  > For DB design, which is better:
  >
  > 1.  one collection of quiz, containing quiz name, quiz description, etc and an array of question object
  > 2.  2 collections. Quiz collection and question collection. There's a quizId for each question document.

- Prompt:
  If using option 1, for each question, how can I generate id (MongoDB's ObjectId) for each question

#### Context API related

- Prompt: How should I modify the reducer function, so that for nextQuestion action type, I could update highestScores with setHighestScores (custome hook)?

- Prompt: Analyze this error which comes from Vite build tool on file `QuizContext.js`

- Prompt: What's the correct way to wrap around QuizScreen with QuizProvider? Currently I'm doing it this way but it doesn't look correct

#### Project Structure related

- Prompt: Attached is an example project. Analyze the project structure, tell me how could I structure a full stack project in the same way, and what are the configs/steps required to do. The frontend folder is an react project built with Vite.

- Prompt: I also wanna know how could his frontend running on PORT 5173 request backend running on PORT 3000. Is it because he's using proxy?

- Prompt: in dev env, how should I run both front end and backend

- Prompt: Help me understand bin/www.js file

- Prompt: I wanna run frontend and backend separately (frontend ran by vite on port 5173 and backend on 3000). I have proxy setup in vite.config.js. However, when frontend requesting backend, I still got this error: Access to fetch at 'http://localhost:3000/api/quiz/create' from origin 'http://localhost:5173' has been blocked by CORS policy.
