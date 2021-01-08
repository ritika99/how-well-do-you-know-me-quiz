var readlineSync = require("readline-sync");

var highscore = { 
  name: "Psyborgie",
  topScore: 7
};
var score = 0;

quizList = [
  {
    question: "What is my zodiac sign? ",
    answer: "Libra"
  },
  {
    question: "Am I an Android or iPhone person? ",
    answer: "iPhone"
  },
  {
    question: "Where do I live? ",
    answer: "Chandigarh"
  },
  {
    question: "How many siblings do I have? 1 or 2 ",
    answer: "1"
  },
  {
    question: "Which Fortune 500 company did I previously intern with? ",
    answer: "American Express"
  },
  {
    question: "Am I a dog or a cat person? ",
    answer: "Cat"
  },
  {
    question: "Do I prefer coffee or tea? ",
    answer: "Tea"
  },
  {
    question: "Which colour have I dyed my hair currently ? ",
    answer: "Blue"
  },
  {
    question: "Do I prefer mountains or beaches? ",
    answer: "Beaches"
  },
  {
    question: "Who was my favorite actress as a child? (Full name) ",
    answer: "Kareena Kapoor"
  },
]

function welcomeMessage(){
  var username = readlineSync.question("Knock-knock! Who's there? ");
  console.log("\nHello! " + username + " ( ͡❛ ͜ʖ ͡❛)");
  console.log("Welcome to Ritika's 'HOW WELL DO YOU KNOW ME?' quiz.");
  readlineSync.question("\nCan you beat this HIGHSCORE " + highscore.topScore + "? Press Enter to play.\n");
  playGame();
}

function checkAnswer(n, question, answer){
  var userAnswer = readlineSync.question(n + ". " + question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Correct! ( ͡❛ ͜ʖ ͡❛)👍");
    score++;
  }
  else{
    console.log("Incorrect. ( ͡❛ ͜ʖ ͡❛)👎");
  }
  console.log("Score: " + score + "\n");
}

function playGame(){
  for(var i=0; i<quizList.length; i++){
    checkAnswer(i+1, quizList[i].question, quizList[i].answer);
  }
  displayScore();
}

function displayScore(){
  console.log("Hurray! Your total score is " + score);

  if(score > highscore.topScore){
    highscore.topScore = score;
    console.log("\nCongratulations! ( ͡🔥 ͜ʖ ͡🔥)👌  You have beaten the highscore. \nNew HIGHSCORE: " + highscore)
  }
  console.log("\nThanks for playing. Don't forget to share the screenshot!")
}

welcomeMessage();
