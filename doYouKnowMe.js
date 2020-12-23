const chalk = require("chalk");
const readline = require("readline-sync");

console.log(chalk.yellow("How Well do you know me ;-)"));

var userName = readline.question(chalk.magenta("Enter your name: "));

console.log(
  chalk.cyan(`\nWelcome ${chalk.green(userName)} to Do you Konw Omkar.`)
);
console.log(chalk.cyan("Lets Start the quiz...\n"));

var score = 0;

const highScoreDb = [
  {
    userName: "Rahul",
    highScore: 2,
  },
  {
    userName: "Suraj",
    highScore: 3,
  },
];

//Play Function
function play(quetion, answer, a, b, c, d) {
  const quetionColor = chalk.redBright;
  const rightColor = chalk.greenBright;
  const wrongColor = chalk.keyword("orange");

  console.log(quetionColor(quetion));
  console.log(chalk.yellowBright(`\n1. ${a}\n2. ${b}\n3. ${c}\n4. ${d}\n`));
  let userAnswer = readline.question(chalk.blueBright("Enter your answer: "));

  if (Number(userAnswer) === answer) {
    console.log(rightColor("Woo hoo!! Right :)"));
    score += 1;
  } else {
    console.log(wrongColor("Ohh! Sorry its Wrong :("));
  }

  console.log(chalk.yellowBright(`Current Score: ${score}`));
  console.log(chalk.dim("-------------------------------------\n"));
}

//Array of ojects
var quetionsAndAnswers = [
  {
    question: "Where do I live? ",
    answer: 4,
    a: "Pune",
    b: "Kolhapur",
    c: "Warananagar",
    d: "Amba",
  },
  {
    question: "Which college I studied? ",
    answer: 3,
    a: "MIT",
    b: "MITCOE",
    c: "MITAOE",
    d: "None of the above",
  },
  {
    question: "Which is my Engineering branch?  ",
    answer: 1,
    a: "Computer",
    b: "Mechanical",
    c: "Electronics",
    d: "Civil",
  },
  {
    question: "Which vehicle I have? ",
    answer: 2,
    a: "Activa",
    b: "Jupiter",
    c: "Splender",
    d: "Acess",
  },
  {
    question: "What kind of books I like read? ",
    answer: 4,
    a: "Scienctific",
    b: "Fiction",
    c: "Non-Fiction",
    d: "Historical",
  },
];

quetionsAndAnswers.forEach((qna) => {
  play(qna.question, qna.answer, qna.a, qna.b, qna.c, qna.d);
});

console.log(
  chalk.blue(
    `YAY!! ${chalk.green(userName)} you Scored: ${chalk.yellow(score)}`
  )
);

function isItAHighScore(score) {
  let isScoredHigh = false;

  highScoreDb.forEach((user) => {
    if (score >= user.highScore) {
      isScoredHigh = true;
    }
  });

  return isScoredHigh;
}

if (isItAHighScore(score)) {
  console.log(
    chalk.cyanBright("Hey!! Congratulations you achived High Score :)")
  );
  console.log(
    chalk.gray("Please send screenshot of this to save your achivement.")
  );
}

if (score > 3) {
  console.log(chalk.magentaBright("It seems you knows Omkar better. ;)"));
} else {
  console.log(chalk.yellow("You need to hang out more with omkar ;)"));
}
