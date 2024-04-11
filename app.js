let userscore=0;
let compscore=0;

const choices = document.querySelectorAll( '.choice' );

const gameWin  = () => {
    console.log('You win');
    userscore ++;
    document.getElementById("user-score").innerHTML = userscore; 
}

const gameLoose = () => {
    console.log('you loose');
    compscore ++;
    document.getElementById("comp-score").innerHTML = compscore; 
}



const playGame = (userChoice) => {
    console.log("user choice : ",userChoice);
    const options= ["rock", "paper","scissors"]; 
    const randindex = Math.floor(Math.random()*3);
    const compOption = options[randindex];
    console.log("computer choice:",compOption)
    if( userChoice === compOption){
        console.log("Game was draw!");
    }
    else 
    {
        if(userChoice ==="rock") {
        compOption === 'scissor'? gameWin() : gameLoose();
    }
    else if(userChoice==='paper'){
        compOption==='rock' ? gameWin():gameLoose();
    }
    else {
        compOption ===  'paper' ? gameWin() : gameLoose();  
    }
}

}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
});
});