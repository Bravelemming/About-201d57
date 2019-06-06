'use strict';

var correct = 0;

var question1through5 = function() {
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
};//end of function

question1through5();

var numbersGame = function() {
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
}; //End of numbersGame.

numbersGame();

var multipleStates = function() {
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
}; //End of multipleStates.

multipleStates();

var finalAndOutput = function() {
  //final queston
  var userName = prompt('Great Job!  But what\'s your name?');

  //output to html the correct guesses and states.
  document.getElementById('writeHere').innerHTML = 'You got ' + correct + ' out of 7, '+ userName + '!';
};

finalAndOutput();
