let audioEnabled = true;
let timerEnabled = true;


let uSelectSemibreve = document.getElementById("semibreveselection");
let uSelectMinum = document.getElementById("minumselection");
let uSelectCrotchet = document.getElementById("crotchetselection");
let uSelectQuaver = document.getElementById("quaverselection");
let uSelectTiedQuavers = document.getElementById("tiedquaversselection");
let uSelectSemiquaver = document.getElementById("semiquaverselection");

let uSelectSemibrevetoggle = 1;
let uSelectMinumtoggle = 1;
let uSelectCrotchettoggle = 1;
let uSelectQuavertoggle = 1;
let uSelectTiedQuaverstoggle = 1;
let uSelectSemiquavertoggle = 1;

let uSelectArray = [uSelectSemibrevetoggle,uSelectMinumtoggle,uSelectCrotchettoggle,uSelectQuavertoggle,uSelectTiedQuaverstoggle,uSelectSemibrevetoggle];







const onOff = (x) =>{
    if (x == true){
        return `<span style = "color: green;"><u><strong>On</strong></u></span>`
    }else{
        return `<span style = "color: red;"><u><strong>Off</strong></u></span>`
    }
}

const toggleAudio = () => {
    audioEnabled = !audioEnabled;
    document.getElementById("audiobutton").innerHTML = `Game audio is: ${onOff(audioEnabled)}.`
}
const toggleTimer = () => {
    timerEnabled = !timerEnabled;
    document.getElementById("timerbutton").innerHTML = `Game timer is: ${onOff(timerEnabled)}.`
}
  
const gameSettings = () =>{
    eButtonStartGame.id = `audiobutton`;
    document.getElementById("audiobutton").innerHTML = `Game audio is: ${onOff(audioEnabled)}.`
    document.getElementById("audiobutton").setAttribute( "onClick", "toggleAudio();" );
    eSettings.id = `timerbutton`;
    document.getElementById("timerbutton").innerHTML = `Game timer is: ${onOff(timerEnabled)}.`
    document.getElementById("timerbutton").setAttribute( "onClick", "toggleTimer();" );
    eBackButton.style.visibility = `visible`;
    eNoteSelect.style.display = `inline-block`;
}
const backButton = () =>{
    eBackButton.style.visibility = `hidden`;
    document.getElementById("audiobutton").setAttribute( "onClick", "startGame();" );
    document.getElementById("audiobutton").innerHTML = `Start Game!`
    document.getElementById("audiobutton").setAttribute( "id", "startgamebutton" );
    document.getElementById("timerbutton").innerHTML = `Settings`
    document.getElementById("timerbutton").setAttribute( "onClick", "gameSettings();" );
    document.getElementById("timerbutton").setAttribute( "id", "gamesettings" );
    eNoteSelect.style.display = `none`;
    
}
uSelectSemibreve.addEventListener('click', function () { 
    selectNotes(uSelectSemibreve); 
})
uSelectCrotchet.addEventListener('click', function () { 
        selectNotes(uSelectCrotchet); 
    })
uSelectMinum.addEventListener('click', function () { 
    selectNotes(uSelectMinum); 
})

uSelectQuaver.addEventListener('click', function () { 
    selectNotes(uSelectQuaver); 
})
uSelectSemiquaver.addEventListener('click', function () { 
    selectNotes(uSelectSemiquaver); 
})
uSelectTiedQuavers.addEventListener('click', function () { 
    selectNotes(uSelectTiedQuavers); 
})






const selectNotes = (element) =>{
element.style.backgroundColor = (element.style.backgroundColor == `var(--set-note-color-on)`) ? `var(--set-note-color-off)` : `var(--set-note-color-on)`

switch(element){//if element is these then toggle them
    case uSelectSemibreve:
        uSelectSemibrevetoggle = (uSelectSemibrevetoggle == 1) ? 0 : 1;
      break;
      case uSelectMinum:
        uSelectMinumtoggle = (uSelectMinumtoggle == 1) ? 0 : 1; 
      break;
      case uSelectCrotchet:
        uSelectCrotchettoggle = (uSelectCrotchettoggle == 1) ? 0 : 1;
      break;
      case uSelectQuaver:
        uSelectQuavertoggle = (uSelectQuavertoggle == 1) ? 0 : 1;
      break;
      case uSelectTiedQuavers:
      uSelectTiedQuaverstoggle = (uSelectTiedQuaverstoggle == 1) ? 0 : 1;
        break;
        case uSelectSemiquaver:
            uSelectSemiquavertoggle = (uSelectSemiquavertoggle == 1) ? 0 : 1;
        break;
}
}

const finaliseSelection = () =>{//places chosen notes into array which will be used to customise questions
    let x = 0;
    while(x == 0){
    if(uSelectSemibrevetoggle == 1){
        uChosenNoteSelection.push(0)
    }
    if(uSelectMinumtoggle == 1){
        uChosenNoteSelection.push(1)
    }
    if(uSelectCrotchettoggle == 1){
        uChosenNoteSelection.push(2)
    }
    if(uSelectQuavertoggle == 1){
        uChosenNoteSelection.push(3)
    }
    if(uSelectTiedQuaverstoggle == 1){
        uChosenNoteSelection.push(4)
    }
    if(uSelectSemiquavertoggle == 1){
        uChosenNoteSelection.push(5)
    }
    x=1;
}
    return uChosenNoteSelection
}
const createGameArray = () =>{
    for (let i = 0; i < uChosenNoteSelection.length; i++)
    switch(uChosenNoteSelection[i]){
        case 0: 
         MNVArray.push(semibreve);
         break;
        case 1: 
         MNVArray.push(minum);
         break;
        case 2: 
         MNVArray.push(crotchet);
         break;
        case 3: 
         MNVArray.push(quaver);
         break;
        case 4: 
         MNVArray.push(tiedquaver);
         break;
        case 5: 
         MNVArray.push(semiquaver);
         break;
        default:
            return `Error`;

    }

}



function changeHiddenInput(objDropDown) {
    console.log(objDropDown);
    var objHidden = document.getElementById("hiddenInput");
    objHidden.value = objDropDown.value;
    var a = objHidden.value;
    result.innerHTML = a || "";
    cNoOfQuestions = a;
    console.log(cNoOfQuestions);
}