//the trivia questions for Game A(10 in all, in an object)
var triviaQuestionsA = [{
	question: "Luigi's first game as the main character is...",
	answerList: ["Luigi's Mansion", "Mario is Missing!", "Mario Bros.", "Super Mario Bros. The Lost Levels"],
	answer: 1
},{
	question: "The current Donkey Kong's first appearance was in which game?",
	answerList: ["Donkey Kong Country", "Donkey Kong", "Donkey Kong Jr.", "Donkey Kong Land"],
	answer: 0
},{
	question: "Which villain has not made a mainstream appearance?",
	answerList: ["Waluigi", "Bowser", "Mario", "Wario"],
	answer: 0
},{
	question: "In Super Mario Bros. 2, who has the weakest jump?",
	answerList: ["Luigi", "Mario", "Toad", "Princess Peach"],
	answer: 2
},{
	question: "Which game was Mario a villain in?",
	answerList: ["Super Mario 64", "Mario Party", "Super Mario Kart", "Yoshi's Safari"],
	answer: 3
},{
	question: "When year did the first WarioWare game come out?",
	answerList: ["2003", "2000", "2004", "1998"],
	answer: 0
},{
	question: "Which game used Yoshi's current posture (upright instead of hunched)?",
	answerList: ["Yoshi's Cookie", "Yoshi's Story", "Super Mario World 2: Yoshi's Island", "Yoshi"],
	answer: 1
},{
	question: "What color was Bowser in the American cartoon shows?",
	answerList: ["brown", "red", "green", "orange"],
	answer: 2
},{
	question: "Daisy has only made one appearance in a mainstream game, which was it?",
	answerList: ["Super Mario World", "Super Mario Land", "Mario Tennis", "Mario Golf: Toadstool Tour"],
	answer: 1
},{
	question: "Peach's current voice actress is?",
	answerList: ["Jen Taylor", "Asako Kozuki", "Leslie Swan", "Samantha Kelly"],
	answer: 3
}];

//the trivia questions for gameB(15 in all, in an object)
var triviaQuestionsB = [{
	question: "Mario's first game was...",
	answerList: ["Mario Bros.", "Donkey Kong", "Super Mario Bros.", "Super Mario World 2: Yoshi's Island"],
	answer: 1
},{
	question: "Mario was created by...",
	answerList: ["Shigeru Miyamoto", "Keiji Inafune", "Satoshi Tajiri", "Satoru Iwata"],
	answer: 0
},{
	question: "Who is NOT voiced by Charles Martinet?",
	answerList: ["Toad", "Luigi", "Mario", "Wario"],
	answer: 0
},{
	question: "What kind of species is Toadette?",
	answerList: ["mushroom", "toadstool", "toad", "fungus"],
	answer: 2
},{
	question: "Which game was the first to use Peach's name (not Princess Toadstool)?",
	answerList: ["Super Mario 64", "Mario Party", "Super Mario Kart", "Yoshi's Safari"],
	answer: 3
},{
	question: "First Yoshi's Island game that Baby Mario doesn't appear in?",
	answerList: ["Yoshi's Story", "Yoshi's Cookie", "Super Mario World", "Yoshi's Safari"],
	answer: 0
},{
	question: "Luigi's key nemesis is?",
	answerList: ["Bowser", "King Boo", "Bowser Jr.", "Mario"],
	answer: 1
},{
	question: "Who is NOT a princess?",
	answerList: ["Peach", "Daisy", "Pauline", "Rosalina"],
	answer: 2
},{
	question: "Which of these games was Bowser's first appearance as a hero?",
	answerList: ["Super Mario Galaxy", "Super Mario RPG: Legend of the Seven Stars", "Mario and Luigi: Superstar Saga", "Super Paper Mario"],
	answer: 1
},{
	question: "Where is Rosalina's mother?",
	answerList: ["Comet Observatory", "Earth", "Heaven", "Under a tree on a hill"],
	answer: 3
},{
	question: "Wario's first game is?",
	answerList: ["Super Mario Land 2", "Wario Land: Super Mario Land 3", "Wario World", "Mario Kart 64"],
	answer: 0
},{
	question: "Diddy Kong's relaion to Donkey Kong?",
	answerList: ["uncle", "nephew", "son", "best friend"],
	answer: 1
},{
	question: "How many episodes are in the show 'The Super Mario Bros. Super Show'?",
	answerList: ["26", "52", "13", "65"],
	answer: 3
},{
	question: "Who has Jen Taylor NOT voiced?",
	answerList: ["Birdo", "Daisy", "Toadette", "Toad"],
	answer: 0
},{
	question: "Pauline's most recent appearance is?",
	answerList: ["Mario vs. Donkey Kong: Tipping Stars", "New Super Mario Bros. U", "Super Mario Odyssey", "Donkey Kong"],
	answer: 2
}];

//this array functions as a foil for the array above
var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13','question14','question15'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "Good job! That's the right answer!",
	incorrect: "Nope, that's wrong.",
	endTime: "Sorry, you're out of time!",
	finished: "OK! Time for the results! This is how you did..."
}  //messages object that generates response message
function initGameA(){
	$('#QuizBtnA').hide();
	$('#QuizBtnB').hide();
	newGameA();
}

function initGameB(){
	$('#QuizBtnA').hide();
	$('#QuizBtnB').hide();
	newGameB();
}

$('#startBtn').on('click', function(){
	$(this).hide();
	$('#QuizBtnA').html("QuizA");
	$('#QuizBtnB').html("QuizB");
}); //when start button is clicked, generates two buttons asking which game to play, then hides buttons and begins game depending on button chosen

$('#startOverBtn').on('click', function(){
	$(this).hide();
	$('#QuizBtnA').html("QuizA");
	$('#QuizBtnB').html("QuizB");
	}); //if reset button is clicked generates the two buttons for each quiz and does same thing as function above

//for this function set up the html with 10 questions, quiz stye
function newGameA(){
	$('#results').html("Show me the answers!");
}

//thisfunction sets up the html by declaring variables to either 0 or leaving it empty, then calls questionB function
function newGameB(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestionB();
} //new game for hard quiz


function newQuestionB(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestionsB.length);
	$('.question').html('<h2>' + triviaQuestionsB[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestionsB[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdownB();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPageB();
	});
}

function countdownA(){
	seconds = 60;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdownA, 1000);
}

function countdownB(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdownB, 1000);
}

function showCountdownA(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		scoreboardA();
	}
}

function showCountdownB(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPageB();
	}
}

function answerPageB(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();
	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	$('#gif').html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboardB, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestionB, 5000);
	}	
}

function scoreboardA(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Play again?');
	$('#startOverBtn').click(function(){
		$('#finalMessage').empty();
		$('#correctAnswers').empty();
		$('#incorrectAnswers').epmty();
		$('#unanswered').empty();
		$('#startOverBtn').hide();
		$('#startBtn').show();
	});
}

function scoreboardB(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Play again?');
	$('#startOverBtn').click(function(){
		$('#finalMessage').empty();
		$('#correctAnswers').empty();
		$('#incorrectAnswers').empty();
		$('#unanswered').empty();
		$('#startOverBtn').hide();
		$('#startBtn').show();
		$('#QuizBtnA').show();
		$('#QuizBtnB').show();
	});
}
