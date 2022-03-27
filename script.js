//Make this a speed test to see how fast they can get to a certain amount of points.

//Class creator
class LiteracyNote {
  constructor(name, value) {
    this._name = name;
    this._value = value;
    this._appearance = `https://thesuccessfulteacher.co.uk/wp-content/uploads/MusicCurr/MusicGames/MusicSpeedNotes/gameimages\\${name.toLowerCase().replace(/\s+/g, '')}.png`;
    this._attempts = 0;
    this._correct = 0;
    this._incorrect = 0;
  }
  get name() {
    return this._name;
  }
  get value() {
    return this._value;
  }
  get appearance() {
    return this._appearance;
  }
  get attempts() {
    return this._attempts;
  }
  get correct() {
    //console.log(`This was correct`);
    return this._correct;
  }
  get incorrect() {
    //console.log(`This was incorrect`);
    return this._incorrect;
  }

  increaseAttempts() {
    return this._attempts++;
  }
  increaseCorrect() {
    return this._correct++;
  }
  increaseIncorrect() {
    return this._incorrect++;
  }
}

//Going to place the questions into forming an object and use this to keep a log

//Create Notes
const semiquaver = new LiteracyNote("Semiquaver", `1/4`);
const tiedquaver = new LiteracyNote("Tied Quavers", `1/4 + 1/4`);
const quaver = new LiteracyNote("Quaver", `1/2`);
const crotchet = new LiteracyNote("Crotchet", `1`);
const minum = new LiteracyNote("Minum", `2`);
const semibreve = new LiteracyNote("Semibreve", `4`);
//Create Music Note Value array
const MNVArray = [];

const MNVArrayFlex = [quaver, crotchet, minum, semibreve];
//Array for storage of generated Questions
const genQuestionArray = [];
const genQuestionName = [];
const genQuestionValue = [];
const genQuestionAppearance = [];

//Function Positionings
let currentQuestionNo = 0;

//Variables needing reset
let rTemp;
//qBox1
//qBox2
//qBox3
//uPoints

//User Inputs u/

let uChosenNoOfQuestions;
let randomQuestionsChoose = true;
let uChosenNoteSelection = [];

//Counters
let cNoOfQuestions = 5;
let uPoints = 0;
//Buttons
let uRanButtonOrder = [0, 1, 2];
let qBox1;
let qBox2;
let qBox3;

//Durestenfield Shuffle
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
//Random Number Generation
const rNumGen = (span) => Math.floor(Math.random() * span);

//Randomise order of questions
const ranButtons = () => {
  shuffleArray(uRanButtonOrder);
  console.log(`RanButton order is : ${uRanButtonOrder}`);
};

const populateBoxes = () => {
  if (MNVArray.length > 2){
  qBox1 = genQuestionValue[currentQuestionNo];
  qBox2 = MNVArray[rNumGen(MNVArray.length)].value;
  qBox3 = MNVArray[rNumGen(MNVArray.length)].value;
  while (qBox2 == qBox1 || qBox2 == qBox3) {
    qBox2 = MNVArray[rNumGen(MNVArray.length)].value;
    console.log(`qBox2: Duplicate detected: Retrying`);
  }
  while (qBox3 == qBox1 || qBox3 == qBox2) {
    qBox3 = MNVArray[rNumGen(MNVArray.length)].value;
    console.log(`qBox3: Duplicate detected: Retrying`);
  }}
  console.log(qBox1, qBox2, qBox3);
  ranButtons();
  document.getElementById(`buttonchoice${uRanButtonOrder[0]}`).innerHTML =
    qBox1;
  document.getElementById(`buttonchoice${uRanButtonOrder[1]}`).innerHTML =
    qBox2;
  document.getElementById(`buttonchoice${uRanButtonOrder[2]}`).innerHTML =
    qBox3;
  //assign buttons true or flase
  document.getElementById(`buttonchoice${uRanButtonOrder[0]}`).onclick =
    buttonTrue; //true
  document.getElementById(`buttonchoice${uRanButtonOrder[1]}`).onclick =
    buttonFalse; //false
  document.getElementById(`buttonchoice${uRanButtonOrder[2]}`).onclick =
    buttonFalse; //false
};
//Play Audio Function

function playAudio(url) {
  if (audioEnabled == true){
  new Audio(url).play();
  }else{
    return
  }
}

//Start new Question Function

const gameScore = () =>{
  eScorePoints.innerHTML = uPoints;
}
const nextQuestion = () =>{
  if ((uPoints > 2)) {
    stopStopwatch();
    alert("Game End!");
    displayResults();
    
  }else{
  let i = 0;
  resetVars();
  currentQuestionNo++;
  orderOfQuestions();
  populateGameFrame();
  populateBoxes();
  if (i>0){ eNextQuestion.setAttribute('onclick', `nextQuestion();`)} 
  eNextQuestion.style.visibility = `hidden`;
  eNextQuestion.innerHTML = `Next Question`;
  console.log(`Temp Num : ${rTemp}`);
  i++;
  hideAfterAnswer(1);
  }
}

let hideAfterAnswer = (truefalse) =>{//0 = hide, 1 = show;
  if(truefalse == 0){ 
  for (let i = 0; i < 3; i++){
    document.getElementById(`buttonchoice${uRanButtonOrder[i]}`).style.display = `none`
    } 
  for (let j = 1; j < 3; j++){
      document.getElementById(`questiontext${[j]}`).style.visibility = `hidden`
      }
    }else if (truefalse == 1) {
      for (let i = 0; i < 3; i++){
        document.getElementById(`buttonchoice${uRanButtonOrder[i]}`).style.display = `inline-block`
        } 
      for (let j = 1; j < 3; j++){
          document.getElementById(`questiontext${[j]}`).style.visibility = `inline-block`
          }
    }
    
}

//function for Assigining buttons correct or incorrect
//*change this to grabbing the element values instead using (element.value)
const buttonTrue = () => {
  //console.log(`User choice is: True`);
  
  eNextQuestion.style.display = "inline-block"
  checkAnswer(0);
  playAudio(aCorrectPing);
  gameScore();
  hideAfterAnswer(0);
};
const buttonFalse = () => {
  //console.log(`User Choice is :False`);
  checkAnswer(1);
  playAudio(aIncorrectAnswer);
};
//Functions for what to do if anser is false or correct.
let checkAnswer = (tf) => {
  //0 = true 1 = false
  if (tf == 0) {
    MNVArray[rTemp].increaseCorrect();
    MNVArray[rTemp].increaseAttempts();
    eFeedbackInfo.innerHTML = `Correct!`
    uPoints++;
    eNextQuestion.style.visibility = `visible`;
  } else if (tf == 1) {
    MNVArray[rTemp].increaseIncorrect();
    MNVArray[rTemp].increaseAttempts();
    eFeedbackInfo.innerHTML = `Try Again!`
  } else {
    console.log(`checkAnswer did not return a T//F value`);
  }
  console.log(MNVArray[rTemp].name);
  console.log(`Attempts ${MNVArray[rTemp].attempts}`);
  console.log(`Incorrect ${MNVArray[rTemp].incorrect}`);
  console.log(`Correct: ${MNVArray[rTemp].correct}`);
};

//Checks Answers Instead make is so that when the question is Genned it sets the correct box to create a function saying correct. The other mark the function as incorrect.

//Create Array containing Questions
let orderOfQuestions = () => {
  rTemp = rNumGen(MNVArray.length); //creates a random number between the length of MNVArray
  genQuestionArray.push(rTemp);
  genQuestionName.push(MNVArray[rTemp].name);
  genQuestionValue.push(MNVArray[rTemp].value);
  genQuestionAppearance.push(MNVArray[rTemp].appearance);
  console.log(`Index of MNVArray chosen: ${genQuestionArray}`);
  console.log(genQuestionName);
  console.log(`Note Value:${genQuestionValue}`);
  console.log(genQuestionAppearance);
  console.log(`orderOfQuestions End \n ...`);
};
const populateGameFrame = () => {
  eQuestionText1.innerHTML = `What is the note value of a <u><strong>${genQuestionName[currentQuestionNo]}</strong></u>?`;
  eQuestionPic1.src = genQuestionAppearance[currentQuestionNo];
};

const startGame = () =>{
  
  finaliseSelection();
  if (uChosenNoteSelection.length >2){
  createGameArray();
  orderOfQuestions();
  populateGameFrame();
  populateBoxes();
  eStartMenu.style.visibility = `hidden`;
  eGamePlate.style.visibility = `visible`;
  update();
  startStopwatch();
}else{
  uChosenNoteSelection = [];
  alert("Please enable at least THREE note values.")
}
}


const update = () => {
  
  gameScore();
};

let resetVars = () => {
  uRanButtonOrder = [0, 1, 2];
  qBox1 = 0;
  qBox2 = 0;
  qBox3 = 0;
};

//Timer

let offset = 0,
  paused = true;

render();
  
function startStopwatch(evt) {
  if (timerEnabled){
    document.getElementById("stopwatch").setAttribute("style", "display: block;")
  }
  if (paused) {
    paused = false;
    offset -= Date.now();
    render();
  }
}

function stopStopwatch(evt) {
  if (!paused) {
    paused = true;
    offset += Date.now();
  }
}

function resetStopwatch(evt) {
  if (paused) {
    offset = 0;
    render();
  } else {
    offset = -Date.now();
  }
}

function format(value, scale, modulo, padding) {
  value = Math.floor(value / scale) % modulo;
  return value.toString().padStart(padding, 0);
}

function render() {
  var value = paused ? offset : Date.now() + offset;

  document.querySelector('#s_ms').textContent = format(value, 1, 1000, 3);
  document.querySelector('#s_seconds').textContent = format(value, 1000, 60, 2);
  document.querySelector('#s_minutes').textContent = format(value, 60000, 60, 2);
  
  if(!paused) {
    requestAnimationFrame(render);
  }
}

