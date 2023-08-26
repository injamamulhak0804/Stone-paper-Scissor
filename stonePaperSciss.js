function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt());
    let result = decideWinner(humanChoice, botChoice);
    message = finalMessage(result)
    rpsfronted(yourChoice.id, botChoice, message);
}

function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
}


function numberToChoice(number) {
    return ['rock', 'scissors', 'paper'][number];
}



function decideWinner(yourChoice, computerChoice) {
    let rpsDataBase = {
        "rock": { 'scissors': 1, "rock": 0.5, "paper": 0 },
        "paper": { "rock": 1, "paper": 0.5, "scissors": 0 },
        "scissors": { "paper": 1, "scissors": 0.5, "rock": 0 }
    }

    let yourScore = rpsDataBase[yourChoice][computerChoice];
    let computerScore = rpsDataBase[computerChoice][yourChoice];

    console.log(yourScore);
    console.log(yourScore);
    return [yourScore, computerScore];
}




function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { "message": "You Lose 😭😭", "color": "red" }
    } else if (yourScore == 0.5) {
        return { "message": "It's Tie 💔💔", "color": "green" }
    } else {
        return { "message": "You Win💥💥", "color": "green" }
    }
}



function rpsfronted(humanImageChoice, BotImageChoice, FinalMessage) {
    let imageDataBase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }

    // Removing all the images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();



    const humanDiv = document.createElement('div');
    const botDiv = document.createElement('div');
    const messageDiv = document.createElement('div');

    humanDiv.innerHTML = `<img src="${imageDataBase[humanImageChoice]}" style = "box-shadow: 0px 10px 50px rgba(37, 50, 223, 1);"></img>`;
    messageDiv.innerHTML = `<h1 style = "order: 2";>${message['message']}</h1>`
    botDiv.innerHTML = `<img src="${imageDataBase[BotImageChoice]}" style = "box-shadow: 0px 10px 50px rgba(243, 38, 24, 12);"></img>`;

    document.getElementById('flex-box-rps-div').append(humanDiv, messageDiv, botDiv);
}







