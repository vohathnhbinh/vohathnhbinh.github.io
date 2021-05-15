const computerPlay = () => {
    const plays = ["ROCK", "PAPER", "SCISSORS"];
    return plays[Math.floor(Math.random() * 3)];
};

const choices = {
    ROCK: {weakTo: "PAPER", strongTo: "SCISSORS", src: "./rock.png"},
    PAPER: {weakTo: "SCISSORS", strongTo: "ROCK", src: "./paper.png"},
    SCISSORS: {weakTo: "ROCK", strongTo: "PAPER", src: "./scissors.png"}
}

const startPlay = (playerSelection, computerSelection) => {
    let result = null;
    if (choices[playerSelection].strongTo === computerSelection)
        result = 1;
    else if (choices[playerSelection].weakTo === computerSelection)
        result = -1;
    else
        result = 0;
    return result;
};

const yourPlay = (playerSelection) => {
    const computerSelection = computerPlay();
    const insults = [
        "What are you, Stupid? How could you lose to a computer lol!!!",
        "Imagine losing Rock Paper and Scissors to a computer! Smh!",
        "Foolish fool who foolishly dreams of foolish dreams\n\n I grow tired of the foolish foolery of the foolish fools of this foolish country\n\n A fool is a fool who will only listen to the foolish opinions of other foolish fools\n\nThere's no need for foolish outcries from foolishly foolish fools\n\nFoolish fool spouting foolish foolishness, just as I expect of a foolish fool such as you\n\nOh, how a foolish fool makes a foolish face while dreaming foolishly foolish dreams\n\nDon't be foolish, you foolish fool wearing the foolishly foolish clothes\n\n Yet again the foolish fool spouts out more foolishly foolish drabble\n\nA foolish fool with a foolish sieve for a brain only speaks foolishly with foolish words\n\nI'm inclined to feel sorry for a foolish fool who foolishly spends his time foolishly.",
        "You are still a loser lol, a draw against a computer means still a win for me >:)",
        "You really suck do you?",
        "Imagine playing Rock Paper and Scissors with a computer lol!!!",
        "Ehhhhhhhhhhhh?? Did you just win??? I just let you win BAKA >:(\nThere is no way I lose to the like of you!!!",
        "Guess I am really unlucky today. This is just a game of chance so don't act so smug",
        "BAAAAAAAAAKAAAAAAAAAA!!! How dare you win a game against meeee!!!\nIt's not like I lose on purpose or anything!"
    ];
    let insultIndex = Math.floor(Math.random() * 3);
    const result = startPlay(playerSelection, computerSelection);
    let resultText = null;
    if (result < 0)
        resultText = "Player lose! " + computerSelection + " beats " + playerSelection;
    else if (result === 0) {
        resultText = "It's a tie!!!";
        insultIndex += 3;
    }
    else {
        resultText = "Player win! " + playerSelection + " beats " + computerSelection;
        insultIndex += 6;
    }

    document.getElementById("Player").setAttribute("src", choices[playerSelection].src);
    document.getElementById("Comp").setAttribute("src", choices[computerSelection].src);
    document.getElementsByClassName("result")[0].textContent = resultText;
    document.getElementsByClassName("hehe")[0].textContent = insults[insultIndex];
}