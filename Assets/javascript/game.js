alert("Press Any Key to Get Started!");

//R&B artists of 2018 array
var wordList = [

	"drake",

	"partynextdoor",

	"theweeknd",

	"coletrane",

	"roywoods",

	"trippieredd",

	"sglewis",

	"childishgambino",

	"xxxtentacion",

	"khalid",

	"miguel"



]

//How to allow this to be capitalized

//play sound when the computer has a certain song

//How to recognise spaces

//Not double count letters



var chosenWord = "";

var letterInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];



var winCounter = 0;

var lossCounter = 1;

var numGuesses = 10;



/*  computer finds a word from wordList variable

		computer changes that random word from letters to underscores

		  computer adds underscores to the HTML to pop up

				numguesses equals 10, and blankandsuccess is an empty array,

				and wronggueses is empty as well. */





function startGame() {



	wrongGuesses = [];

	console.log("this is wrong guesses in startGame", wrongGuesses);

	numGuesses = 10;

	blanksAndSuccesses = [];



	chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

	lettersInChosenWord = chosenWord.split("");

	numBlanks = lettersInChosenWord.length;

	console.log(chosenWord);

	console.log(numBlanks)



	for (var i = 0; i < numBlanks; i++) {

		blanksAndSuccesses.push("_");

	}

	console.log(blanksAndSuccesses);

	document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join("  ");

	document.getElementById('guesses-left').innerHTML = numGuesses;



}





    /*

     Comparing the letter the user picks matches any of the letters in the word in the array

     Then have a conditional statement to determine if the letter the user picked

    is in the word. If so, do something, if not, do something else

    Finally, If the user is wrong we want to decrease the numGuesses variables by one

    */

   function checkLetters(letter) {

	var letterInWord = false;



	for (var i = 0; i < numBlanks; i++) {

		if (chosenWord[i] === letter) {

			letterInWord = true;



		}

	}



	if (letterInWord) {

		for (i = 0; i < numBlanks; i++) {

			if (chosenWord[i] === letter) {

				blanksAndSuccesses[i] = letter;



			}



		}

	} else {

		numGuesses--;

		wrongGuesses.push(letter)

	}



    /*

    to check if a letter is already in the wrong guesses array. What we want to do

    is set up an if/else conditional that will run a for loop that will iterate over

    all the letters and then use the if/else to check if it it already exists.

    */



}



function roundComplete() {

    /*  update the HTML with letters that are in the word
   		update the HTML with guesses we have left
    	update the HTML to show the wrong guesses
	 	determine whether the use won the game or not */



	document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");

	document.getElementById('guesses-left').innerHTML = numGuesses;

	document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");



	// if(blanksAndSuccesses.indexOf(letter >= 1)){

	//     console.log(letter)

	// }

	console.log(lettersInChosenWord);

	console.log(blanksAndSuccesses);

	if (lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")) {

		winCounter++;

		alert("You win!!");

		document.getElementById('win-counter').innerHTML = winCounter;

		startGame();

	} else if (numGuesses === 0) {

		document.getElementById('loss-counter').innerHTML = lossCounter++;

		document.getElementById('wrong-guesses').innerHTML = "";

		alert("you don't have any more guesses");

		startGame();

	}




}

startGame();





/*   take in the letter that we type in and going to pass it through the CheckLetter function  */



document.onkeyup = function (event) {

	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

	console.log("this is the letter we typed", letterGuessed)

	checkLetters(letterGuessed)

	roundComplete();



}

