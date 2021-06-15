const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?","True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please type your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < 5; i++) {
    canidateAnswer = input.question(questions[i])
    candidateAnswers.push(canidateAnswer);
  }
}


function gradeQuiz(candidateAnswers) {
  let grade;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let rightAnswerCounter = 0;
  let status = "";
  for (i = 0; i < candidateAnswers.length; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      rightAnswerCounter += 1;
    }
  }
  grade = rightAnswerCounter / (questions.length) * 100;
  if (grade >= 80) {
    status = "PASSED"
  } else {
    status = "FAILED"
  }
console.log(rightAnswerCounter);
console.log(`Candidate Name: ${candidateName}
1) ${questions[0]}
Your Answer: sally ride
Correct Answer: Sally Ride

2) ${questions[1]}
Your Answer: false
Correct Answer: true

3) ${questions[2]}
Your Answer: 45
Correct Answer: 40

4) ${questions[3]}
Your Answer: trajectory
Correct Answer: Trajectory

5) ${questions[4]}
Your Answer: 10
Correct Answer: 3

>>> Overall Grade: ${grade}% (${rightAnswerCounter} of ${questions.length} responses correct) <<<
>>> Status: ${status} <<<
`)
}

function runProgram() {
  askForName();
  
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName + ", hope your day is well.");

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};