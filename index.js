const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') return userInput;
  else console.log('Error!');
};

// console.log(getUserChoice('rock'));
// console.log(getUserChoice('xeno'));

const getComputerChoice = ()=>{
const Choice = Math.floor(Math.random()*3);
  if(Choice===0) return 'rock';
  else if(Choice===1) return 'paper';
  else if(Choice===2) return 'scissors';
}

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice===computerChoice) return 'Game is Tied';
  if(userChoice==='bomb') return 'You cheated! You Win!';

  if(userChoice==='rock'){
    if(computerChoice==='paper')return 'Computer Won';
    else return 'User Won';
  }
    if(userChoice==='paper'){
    if(computerChoice==='scissors')return 'Computer Won';
    else return 'User Won';
  }
    if(userChoice==='scissors'){
    if(computerChoice==='rock')return 'Computer Won';
    else return 'User Won';
  }
}

// console.log(determineWinner('rock', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
