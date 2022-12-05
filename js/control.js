let user_score = 0;
let computer_score = 0;
let user_score_span = document.querySelector(".user-score");
let computer_score_span = document.querySelector(".computer-score");
let score_board = document.querySelector(".show_results");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const choices = ['r', 'p', 's'];
function won(){
    user_score++;
    console.log("User Score : "+user_score);
    score_board.innerHTML="User Won Over Computer and Get Point";
    user_score_span.innerHTML=user_score;
    computer_score_span.innerHTML=computer_score;
}
function lose(){
    computer_score++;
    score_board.innerHTML="Computer Won over User and Get Point";
    computer_score_span.innerHTML=computer_score;
    user_score_span.innerHTML=user_score;

}
function Tie()
{
    score_board.innerHTML="Tie";
}
function game(userChoice) {
    console.log(userChoice)
    computer_choices=Math.floor((Math.random()*3));
    console.log("Computer Choices : "+choices[computer_choices]);
    switch(userChoice+choices[computer_choices])
    {
        case "sp":
        case "pr":
        case "rs":
            won();
            break;
        case "ps":
        case "sr":
        case "rp":
            lose();
            break;
        case "pp":
        case "ss":
        case "rr":        
            Tie(); 
            break;                          
    }
    

}
rock_div.addEventListener('click', function () {
    game('r');
})
paper_div.addEventListener('click', function () {
    game('p');

})
scissor_div.addEventListener('click', function () {
    game('s');

})

