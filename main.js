let log = console.log
let images =  document.querySelectorAll(".image");

// computer choices and returns one oupt eg paper
let aiInputs = ['rock', 'paper', 'scissors'];
let computerChoice = ()=>{
    let random = Math.floor(Math.random()*aiInputs.length);
    return aiInputs[random]
}

let counter = 5

// human selection returns one value eg rock
images.forEach((e, index)=>{
    e.onclick =()=>{
        if(counter >= 1){
            counter --
            let values = e.alt;
            match(values , computerChoice())
        }else{
            endGame(true)
        }
    }
})

// end the game 
function endGame(status){
    let winer = null;
    (score["player"] > score["ai"]) ? winer = "you won" : winer = " you lost";
    (status == true && score["player"] != score["ai"] ) ? alert(`${winer} the game`) : alert("draw ")
}


// check match if matching ai or computer
function match(player , ai){
    let winner = "";
    // check winder
    if(player == ai){
        winner = "tie"
    }else if (player == "rock" && ai == "paper"){
        winner = "ai"
    }else if(player == "rock" && ai == "scissors"){
        winner = "player"
    }else if(player == "paper" && ai == "rock"){
        winner = 'player'
    }else if(player == "paper" && ai == "scissors"){
        winner = "ai"
    }else if(player == "scissors" && ai == "rock"){
        winner = "ai"
    }else if(player == "scissors" && ai == "paper"){
        winner = 'player'
    };

    makeChanges(player,ai,winner)
}

// score object
let score = {
    "player": 0,
    "ai":0
}

// make changes to the Dom change tet etc
function makeChanges(pl , co , won){
    score[won] += 1 
    document.querySelector("h4").innerText = won
    imageUpdater(pl , co)
}

// uppdate images on divs

let playerOutput = document.querySelector(".player-output")
let aiOutput = document.querySelector(".computer-output")
let playerScore = document.querySelector(".player-score")
let aiScore = document.querySelector(".computer-score")

let imagesPath = {
    "rock":"/images/rock.jpeg",
    "paper":"/images/paper.png",
    "scissors":"/images/scissors.png"
}

function imageUpdater(player , ai){
    playerOutput.style.backgroundImage = `url(${imagesPath[player]})`;
    aiOutput.style.backgroundImage = `url(${imagesPath[ai]})`;
    
    playerOutput.innerText = ""
    aiOutput.innerText = ""

    // update score to dom
    playerScore.innerText = score["player"]
    aiScore.innerText = score["ai"]
}

// reset button 

document.querySelector("button").onclick = ()=>{

    // resert score oobject and counter
    counter = 5
    score = {
        "player": 0,
        "ai":0
    }

    // reserr elemnts
    playerScore.innerText = score["player"]
    aiScore.innerText = score["ai"]

    document.querySelector("h4").innerText = "prees to play"

    playerOutput.style.backgroundImage = `url(${imagesPath[""]})`;
    aiOutput.style.backgroundImage = `url(${imagesPath[""]})`;
    
    playerOutput.innerText = "player"
    aiOutput.innerText = "AI"
}