// 1. Create the questions array containing 5 question objects
const questions = [
  {
    category: "Science",
    question: "What is the closest planet to the Sun?",
    choices: ["Venus", "Mercury", "Earth"],
    answer: "Mercury"
  },
  {
    category: "Geography",
    question: "Which country is home to the Kangaroo?",
    choices: ["Australia", "South Africa", "Austria"],
    answer: "Australia"
  },
  {
    category: "History",
    question: "Who painted the Mona Lisa?",
    choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
    answer: "Leonardo da Vinci"
  },
  {
    category: "Pop Culture",
    question: "How many elements are on the periodic table?",
    choices: ["92", "118", "105"],
    answer: "118"
  },
  {
    category: "Sports",
    question: "Which sport uses a shuttlecock?",
    choices: ["Tennis", "Badminton", "Squash"],
    answer: "Badminton"
  }
];

// 2. Define getRandomQuestion function
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// 3. Define getRandomComputerChoice function
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// 4. Define getResults function
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}