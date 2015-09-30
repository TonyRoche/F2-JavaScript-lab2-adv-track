'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob() {}

Blob.prototype.hoursToOoze = hoursToOoze;

var blob = new Blob();

var people = 0;
var hour = 1;
var lastTotal = 0;
for (var i = 1; people < 1000; i++) {
    lastTotal = people;
    people = people + i;
    if (people > 1000) {
        people = 1000;
        i = people - lastTotal;
      }
  console.log('Hour ' + hour + ': ' + i + ' eaten');
  console.log('Total eaten is ' + people);
  hour++;
}

var hoursSpentInDowington = hour - 1;

console.log ('It took ' + hoursSpentInDowington + ' hours for the blob to finish the town.\n');

// TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  people = 0;
  hour = 1;
  lastTotal = 0;
  for (var i = peoplePerHour; people < population; i = i + 1) {
    lastTotal = people;
    people = people + i;
    if (people > population) {
        people = population;
        i = people - lastTotal;
        }
    console.log('Hour ' + hour + ': ' + i + ' eaten');
    console.log('Total eaten is ' + people);
    hour++;
}
var finalHour = hour - 1;
console.log('It took ' + finalHour + ' hours for the blob to finish the town.\n');
return finalHour;
  }

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

assert(blob.hoursToOoze(20, 2) === 5, 'The number of hours should be 5');
assert(blob.hoursToOoze(32, 10) === 3, 'The number of hours should be 3');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(planet, language) {
  this.planet = planet;
  this.language = language;
}

// sb is a SentientBeing object

SentientBeing.prototype.sayHello = function(sb) {

  if (this instanceof Human)
    { console.log(hello['federation standard']); }
  if (this instanceof Klingon)
    { console.log(hello.klingon); }
  if (this instanceof Romulan)
    { console.log(hello.romulan); }
  if (sb instanceof Human)
    { return hello['federation standard']; }
  if (sb instanceof Klingon)
    { return hello.klingon; }
  if (sb instanceof Romulan)
    { return hello.romulan; }

  //console.log(sb.language);
  //console.log(this.language);
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
  };

function Klingon() {
  this.base = SentientBeing;
  this.base('Qo\'noS', 'klingon');
}

Klingon.prototype = new SentientBeing();

function Romulan() {
  this.base = SentientBeing;
  this.base('Romulus', 'romulan');
}

Romulan.prototype = new SentientBeing();

function Human() {
  this.base = SentientBeing;
  this.base('Earth', 'federation standard');
}

Human.prototype = new SentientBeing();

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');

assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the human should hear hello');

assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');

assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the human should hear hello');

assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    var aLast = a.charAt(a.length - 1);
    var bLast = b.charAt(b.length - 1);
    if (aLast > bLast) { return 1; }
    if (aLast < bLast) { return -1; }
    if (aLast === bLast) { return 0; }
  }
  stringArray.sort(byLastLetter);
}

var abfab = ['Edina', 'Patsy', 'Saffron', 'Bubble', 'Mrs. M', 'Marshall', 'Bo'];
lastLetterSort (abfab);
console.log (abfab);
var abfabString = abfab.toString();
assert (abfabString === 'Mrs. M,Edina,Bubble,Marshall,Saffron,Bo,Patsy',
  'The array is not sorted alphabetically by last letter.');

var seinfeld = ['Jerry', 'Elaine', 'George', 'Kramer', 'Newman'];
lastLetterSort (seinfeld);
console.log (seinfeld);
var seinfeldString = seinfeld.toString();

assert (seinfeldString === 'Elaine,George,Newman,Kramer,Jerry',
  'The array is not sorted alphabetically by last letter.');

function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(element) {sum = sum + element;});
  return sum;
}

var myNumbers = [2, 5, 8, 10, 100];
console.log (sumArray (myNumbers));
assert (sumArray (myNumbers) === 125, 'The function did not find the correct sum.');

var myNumbers2 = [0, 10, 30, 50, 100];
console.log (sumArray (myNumbers2));
assert (sumArray (myNumbers2) === 190, 'The function did not find the correct sum.');

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    if (sumArray(a) > sumArray (b)) {return 1;}
    if (sumArray(a) < sumArray (b)) {return -1;}
    if (sumArray(a) === sumArray (b)) {return 0;}

    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
}

var myNumbersArrayofArrays = [[2, 3, 4], [1, 2, 1], [4, 5, 80], [4, 5, 7]];
sumSort (myNumbersArrayofArrays);
console.log(myNumbersArrayofArrays);
var s1 = myNumbersArrayofArrays.toString();
assert (s1 ===  '1,2,1,2,3,4,4,5,7,4,5,80',
  'The function did not sort the arrays correctly.');

var myNumbersArrayofArrays2 = [[3, 5, 7], [10, 20, 30], [100, 100, 200], [23, 45, 78]];
sumSort (myNumbersArrayofArrays2);
console.log (myNumbersArrayofArrays2);
var s2 = myNumbersArrayofArrays2.toString();
assert (s2 === '3,5,7,10,20,30,23,45,78,100,100,200',
  'The function did not sort the arrays correctly.');

/*
function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(item) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
}
*/
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
