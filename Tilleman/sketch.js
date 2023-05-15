let buttonrock;
let buttonscissors; 
let buttonpaper;
let score = 0;

function setup() {
  createCanvas(400, 400);
  drawButtons();
}

function draw() {

  textSize(15);
  text('Score: '+score, 150,40);

}

function rock() {
  drawButtons();
  computerguess = random(['Rock', 'Paper', 'Scissors']);
  text('You Chose Rock', 50, 300);
  text('Computer Chose ' + computerguess, 200, 300);
  if(computerguess == 'Rock'){
    text("It's a tie",150,350);
  } else if (computerguess == 'Paper'){
    text("You Lose :(", 150,350);
    score= score - 1
  } else if (computerguess == 'Scissors'){
    text("You Win!", 150,350);
    score= score + 1
  }
}

function paper() {
  drawButtons();
  computerguess = random(['Rock', 'Paper', 'Scissors']);
  text('You Chose Paper', 50, 300);
  text('Computer Chose ' + computerguess, 200, 300);
  if(computerguess == 'Paper'){
    text("It's a tie",150,350)
  } else if (computerguess == 'Scissors'){
    text("You Lose:(", 150,350);
    score= score - 1
  } else if(computerguess == 'Rock'){
    text("You Win! ", 150,350);
    score= score + 1
  }
}

function scissors() {
  drawButtons();
  computerguess = random(['Rock', 'Paper', 'Scissors']);
  text('You Chose Scissors', 50, 300);
  text('Computer Chose ' + computerguess, 200, 300);
  if(computerguess == 'Scissors'){
    text("It's a tie",150,350);
  } else if (computerguess == 'Rock'){
    text("You Lose :( ", 150,350);
    score= score - 1
  } else if(computerguess == 'Paper'){
    text("You Win!", 150,350);
    score= score + 1
  }

}

function drawButtons() {
  background(220);
  


  buttonrock = createButton('Rock');
  buttonrock.position(150, 50);
  buttonrock.mousePressed(rock);

  buttonpaper = createButton('Paper');
  buttonpaper.position(150, 100);
  buttonpaper.mousePressed(paper);

  buttonscissors = createButton('Scissors');
  buttonscissors.position(145, 150);
  buttonscissors.mousePressed(scissors);

   textSize(15);
  text("Rock, Paper, Scissors!", 110, 20);
}