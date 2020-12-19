const chalk = require('chalk');
const readline = require('readline-sync');

console.log(chalk.yellow("How Well do you know me ;-)"));

var userName = readline.question(chalk.magenta("Enter your name: "));

console.log(chalk.cyan(`\nWelcome ${chalk.green(userName)} to Do you Konw Omkar.`));
console.log(chalk.cyan("Lets Start the quiz...\n"));

var score = 0;

const highScoreDb = [
    {
        userName : "Rahul",
        highScore: 2
    }
]

//Play Function
function play(quetion, answer) {
    
    const quetionColor = chalk.redBright;
    const rightColor = chalk.greenBright;
    const wrongColor = chalk.keyword('orange');

    var userAnswer = readline.question(quetionColor(quetion));

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
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
        answer: "Kolhapur"
    },
    {
        question: "Which college I studied? ",
        answer: "MITAOE"
    },
    {
        question: "Which is my Engineering branch?  ",
        answer: "Computer"
    },
    {
        question: "Which vehicle I have? ",
        answer: "Jupiter"
    },
    {
        question: "What kind of books I read? ",
        answer: "historical"
    }
];

quetionsAndAnswers.forEach(qna => {
    play(qna.question,qna.answer);
})

console.log(chalk.blue(`YAY!! ${chalk.green(userName)} you Scored: ${chalk.yellow(score)}`));

function isItAHighScore(score) {
    let isScoredHigh = false;

    highScoreDb.forEach(user => {
        if (score >= user.highScore) {
            isScoredHigh = true;
        }
    });

    return isScoredHigh;
}

if (isItAHighScore(score)) {
    console.log(chalk.cyanBright("Hey!! Congratulations you achived High Score :)")); 
    console.log(chalk.gray("Please send screenshot of this to save your achivement."));    
}

if (score > 3) {
    console.log(chalk.magentaBright("It seems you knows Omkar better. ;)"));
} else {
    console.log(chalk.yellow("You need to hang out more with omkar ;)"));
}
