//Javascript code

let score = JSON.parse(localStorage.getItem('score')) || {Wins:0, Losses:0, Ties:0} ;

/*
if(!score){
    score={Wins:0, Losses:0, Ties:0};
}
*/
function updateScore(){
    document.querySelector(".js-score").innerHTML = `Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`;
}
updateScore();
function User_Move(Move) {
    
    let result = '';
    const mov = Move_Comp();

    if (Move === `Scissors`) {
        if (mov === `Scissors`) {
            result = `Tie`;
        } else if (mov === `Rock`) {
            result = `Computer wins`;
        } else if (mov === `Paper`) {
            result = `You win`;
        }
    } else if (Move === `Rock`) {
        if (mov === `Scissors`) {
            result = `You win`;
        } else if (mov === `Rock`) {
            result = `Tie`;
        } else if (mov === `Paper`) {
            result = `Computer wins`;
        }
    } else if (Move === `Paper`) {
        if (mov === `Scissors`) {
            result = `Computer wins`;
        } else if (mov === `Rock`) {
            result = `You win`;
        } else if (mov === `Paper`) {
            result = `Tie`;
        }
    }

    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(".js-move").innerHTML = `You <img src="images/${Move}-emoji.png" class="move-emoji"><img src="images/${mov}-emoji.png" class="move-emoji"> Computer`;

    if (result === `You win`){
        score.Wins++;
    } 
    else if (result === `Computer wins`){
        score.Losses++;
    } 
    else if (result === `Tie`){
        score.Ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
}
function Move_Comp()
{
    let compMove= ' ';
    const rand = Math.random();
    
    if(rand < 0.333){
        compMove = 'Rock';
    }
    else if(rand < 0.666){
        compMove = 'Paper';
    }
    else{
        compMove = 'Scissors';
    } 
    return compMove;  
    
}