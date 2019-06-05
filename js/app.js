'use strict';

//the guessing game begins
var questions = ['Once I worked on a goatfarm, in Adelaide.  Believe it?',
  'Ski partrol at Northstar cut their budget, so I taught at the ski school. Believe it?',
  'I have jumped out of a plane more times than I\'ve taken a train. Believe it?',
  'I\'m a great cook, and taught myself how from books. Believe it?',
  'I have an irriational suspicion of the French.  Believe it?'
];

var responses = ['There was a ram on that farm that loved me so much, it hurt.',
  'I spent six months getting my EMT-1.  Never used it.  Sigh.',
  'Great guess!  I love taking the train across the country',
  'Fun fact: have never actually owned a cookbook.',
  'I\'m not proud of it.  I think it\'s a relic from genetic memory.  My Irish genes, I hope.'
];

var answers = [true, true, false, false, true];

var correct = 0;
var wrongAnswer = 'Nope!  Wrong answer.';


alert('Welcome to the Game!  You\'re going to hear a series of stories.  Think they\'re true?  Enter Yes.  Think they aren\'t?  Enter no.');

for (var qI = 0 ; qI < questions.length; qI++){
  //collect question response from array, in lower case.
  var yesorno = prompt(questions[qI]).toLowerCase();
  var boolAnswer = false;
  console.log(yesorno[0]);

  //convert given answers to true or false
  if(yesorno[0] === 'y')
  {
    boolAnswer = true;
  }
  else if(yesorno[0] === 'n')
  {
    boolAnswer = false;
  }
  else
  {
    //if anything else, reject user input and iterate to next question.
    alert('Yes or No answers please.  Counts as incorrect!');
  }

  //if they guessed correctly
  if(boolAnswer === answers[qI]){
    //output correct response, add to score.
    alert(responses[qI]);
    correct++;
  }
  else{
    //if it was a wrong answer
    alert(wrongAnswer);
  }

  console.log(questions[qI]);
  console.log('score: ' + correct);
}//end for loop


//a game of numbers
alert('Would you like to play a game?  Guess my favorite number!  You have four tries to get it right.');

var sentinelCondition = false;
var iteratorNumbers = 0;
var questionfourAnswer = '7';
var userPromptSix = 'What number do you think?';

while (sentinelCondition === false && iteratorNumbers < 4){
  //TODO: validate user input for non numbers.
  //collect the user input
  var userGuess = prompt(userPromptSix);
  console.log('user guess: ' + userGuess);

  //they guessed right
  if(questionfourAnswer === userGuess){
    //break loop
    sentinelCondition = true;
    alert('Wow!  You totally got it!');
    correct++;
    console.log('correct: ' + correct );
    console.log('question six correct.');
  }
  //they guessed wrong
  else {
    //their guess was higher than the answer
    if (userGuess > questionfourAnswer){
      alert('You\'re a little high.');
    }
    //their guess was lower than the answer
    if (userGuess < questionfourAnswer){
      alert('You\'re a little low.');
    }
    //iterate over four tries
    iteratorNumbers++;
  }
}


//question seven, multiple right answers.  

var multipleStatesCorrectSeven = ['california', 'maine', 'kentucky', 'oregon'];
var iteratorSeven = 0;
var questionSevenTries = 6;
var sentinelConditionSeven = false;
var userPromptSeven = 'What state do you think I\'ve lived in?';


while (sentinelConditionSeven === false && iteratorSeven < questionSevenTries){
  //TODO: validate user input for non numbers.
  //collect the user input
  var userGuessSeven = prompt(userPromptSeven).toLowerCase();
  console.log('user guess: ' + userGuessSeven);

  //iterate over correct answers and check.
  for (var pI = 0 ; pI < multipleStatesCorrectSeven.length; pI++){
    if(multipleStatesCorrectSeven[pI] === userGuessSeven){
      //break loop, correct guess.
      sentinelConditionSeven = true;
      alert('Wow!  You totally got it!');
      correct++;
      console.log('correct: ' + correct );
      console.log('question seven correct.');
    }

    console.log('sup ' + multipleStatesCorrectSeven[pI]);
  }

  //they guessed wrong
  if (sentinelConditionSeven === false){
    alert('Nope!  Guess again!');
  }
  iteratorSeven++;
}//end question seven

//final queston
var userName = prompt('Great Job!  But what\'s your name?');

//output to html the correct guesses and states.
document.getElementById('writeHere').innerHTML = 'You got ' + correct + ' out of 7, '+ userName + '!';


//END HERE

/* previous lab2, ignore, keep for records..

//Question one
var favoriteColor = prompt('Is your favorite color the color of the sky, at dawn on the beach, in april?');
var favoriteColorLowered = favoriteColor.toLowerCase();
console.log(favoriteColorLowered[0]);
//if yes
if(favoriteColor[0] === 'y')
{
  alert('That\'s my favorite color too.');
}
else
{
  //if anything else
  alert('I guess there are other colors out there.  Maybe.');
}

//Question two
var life = prompt('Do you ever wonder if theres life outside this planet?');
var lifeLow = life.toLowerCase();
console.log(lifeLow[0]);
//if yes
if(lifeLow[0] === 'y')
{
  alert('Wouldn\'t it be exciting?.');
}
else
{
  //if anything else
  alert('Simplicity is often bliss.');
}

//Question three
var seeing = prompt('But if there was life on other worlds, would we even recognize it, do you think?');
var seeingLow = seeing.toLowerCase();
console.log(seeingLow[0]);
//if yes
if(seeingLow[0] === 'y')
{
  alert('Maybe! Life could be sentient silica circles, and be the size of moons!');
}
else
{
  //if anything else
  alert('Maybe not, indeed.  Who knows what grows in strange gardens.');
}

//Question four
var makeIt = prompt('Do you think we\'ll make it as a species past the nuclear era and into space?');
var makeItLow = makeIt.toLowerCase();
console.log(makeItLow[0]);
//if yes
if(makeItLow[0] === 'y'){
  alert('I hope so.');
}
else{
  //if anything else
  alert('If not, I suppose something will make it past us.  Beetles, maybe.');
}

//Question five
var colonize = prompt('If you could, would you leave to colonize another planet?');
var colonizeLowered = colonize.toLowerCase();
console.log(colonizeLowered[0]);
//if yes
if(colonizeLowered[0] === 'y'){
  alert('Brave.');
}
else{
  //if anything else
  alert('The heart wants what it wants.');
}

*/
