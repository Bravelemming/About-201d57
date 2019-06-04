'use strict';

//Question one
var favoriteColor = prompt('Is your favorite color the color of the sky, at dawn on the beach, in april?');
var favoriteColorLowered = favoriteColor.toLowerCase();
console.log(favoriteColorLowered[0]);
//if yes
if(favoriteColor[0] === 'y'){
  alert('That\'s my favorite color too.');
}
else{
  //if anything else
  alert('I guess there are other colors out there.  Maybe.');
}

//Question two
var life = prompt('Do you ever wonder if theres life outside this planet?');
var lifeLow = life.toLowerCase();
console.log(lifeLow[0]);
//if yes
if(lifeLow[0] === 'y'){
  alert('Wouldn\'t it be exciting?.');
}
else{
  //if anything else
  alert('Simplicity is often bliss.');
}

//Question three
var seeing = prompt('But if there was life on other worlds, would we even recognize it, do you think?');
var seeingLow = seeing.toLowerCase();
console.log(seeingLow[0]);
//if yes
if(seeingLow[0] === 'y'){
  alert('Maybe! Life could be sentient silica circles, and be the size of moons!');
}
else{
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
