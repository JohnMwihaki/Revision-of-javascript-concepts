//create a variable with boolen value ,output ,check whether is true,or false
let eating=true;
console.log(eating);
if(eating){
    console.log("i am hungry");

}
if(!eating){
    return "i was not hungry";
}
//tenary opertot ,operand1? operand2,operands3
// let access=age <18?"denied":"allowed";

//use of switch statement
// 1. Generate a random number between 0 and 5
// let randomNumber = Math.floor(Math.random() * 6);

// // 2. Get the user's question using prompt
// let userQuestion = prompt("Ask the Magic 8-Ball a question:");

// // 3. Prepare a response variable
// let eightBallResponse = "";

// // 4. Use switch to assign a response based on the random number
// switch (randomNumber) {
//   case 0:
//     eightBallResponse = "Yes, definitely!";
//     break;
//   case 1:
//     eightBallResponse = "Ask again later.";
//     break;
//   case 2:
//     eightBallResponse = "Better not tell you now.";
//     break;
//   case 3:
//     eightBallResponse = "Don't count on it.";
//     break;
//   case 4:
//     eightBallResponse = "It is certain.";
//     break;
//   case 5:
//     eightBallResponse = "Very doubtful.";
//     break;
//   default:
//     eightBallResponse = "Mystery error!";
// }
// console.log("Your question was: " + userQuestion);
// console.log("Magic 8-Ball says: " + eightBallResponse);

let choice = ["rock", "paper", "scissors"];

// Generate random indices (0 to 2)
let playerrandom = Math.floor(Math.random() * 3);
let computerrandom = Math.floor(Math.random() * 3);

// Get actual selections
let playerChoice = choice[playerrandom];
let computerChoice = choice[computerrandom];

let response = "";

// Compare selections
if (playerChoice === computerChoice) {
    response = "It's a tie!";
} else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
) {
    response = "Player wins!";
} else {
    response = "Computer wins!";
}

// Output the results
console.log(`Player chose: ${playerChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(response);

