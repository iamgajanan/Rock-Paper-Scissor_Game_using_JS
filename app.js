console.log("dfdfgfdgfdgf");
let userScore=0;
let computerScore = 0;

const userScore_span=document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div =document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div = document.getElementById("s");
 const smallUserWord = "user".fontsize(3).sub();
 const smallCompWord = "Comp".fontsize(3).sub();
const getComputerChoices=()=>{
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    }
const convertToWord=(letter)=>{
if(letter=="r") return "Rock";
if(letter=="p") return "Paper";
 return "Scissor";
}

   function win(userChoices, computerChoices){
       userScore++
       userScore_span.innerHTML =userScore;
      

       result_p.innerHTML = `${convertToWord(
         userChoices
       )}${smallUserWord} beats ${convertToWord(
         computerChoices
       )}${smallCompWord} You Win !`;
        console.log("USER WINS.");
    }
   const lose = (userChoices, computerChoices) => {
     computerScore++;
     computerScore_span.innerHTML = computerScore;
         result_p.innerHTML = `${convertToWord(
           userChoices
         )}${smallCompWord} beats ${convertToWord(
           computerChoices
         )}${smallUserWord} You Lose !`;
     console.log("USER LOSE.");
   };
   const draw = (userChoices, computerChoices) => {
        result_p.innerHTML = `${convertToWord(
          userChoices
        )}${smallUserWord} is same ${convertToWord(
          computerChoices
        )}${smallCompWord} Draw !`;
     console.log("DRAW");
   };

const game=(userChoice)=>{
    const computerChoice = getComputerChoices();
    console.log("computer: "+computerChoice);
console.log("user: "+userChoice);

    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
          win(userChoice, computerChoice);
        break;
      case "sr":
      case "rp":
      case "ps":
          lose(userChoice, computerChoice);
        break;

      case "ss":
      case "rr":
      case "pp":
          draw(userChoice, computerChoice);
        break;

    }
};

const main =()=>{
rock_div.addEventListener("click", ()=>{
    game("r");
})
paper_div.addEventListener("click", () => {
    game("p");

});
scissor_div.addEventListener("click", () => {
    game("s");

});
}
main();
