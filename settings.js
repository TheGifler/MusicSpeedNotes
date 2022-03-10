let audioEnabled = true;
let timerEnabled = true;


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
}
const backButton = () =>{
    eBackButton.style.visibility = `hidden`;
    document.getElementById("audiobutton").setAttribute( "onClick", "startGame();" );
    document.getElementById("audiobutton").innerHTML = `Start Game!`
    document.getElementById("audiobutton").setAttribute( "id", "startgamebutton" );
    document.getElementById("timerbutton").innerHTML = `Settings`
    document.getElementById("timerbutton").setAttribute( "onClick", "gameSettings();" );
    document.getElementById("timerbutton").setAttribute( "id", "gamesettings" );
    
    
}