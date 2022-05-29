//Audio Files
let gameMusicSound = true;
const finishedMusic = directory_root+"/soundfiles/Resultswin.wav";
const aCorrectPing = directory_root+"/soundfiles/correctsfx.mp3";
const aIncorrectAnswer = directory_root+"/soundfiles/wronganswer.mp3";
const gameMusic = new sound(directory_root+"/soundfiles/Puzzles.wav");

const startMenuMusic = new sound(directory_root+"/soundfiles/Nostalgic.wav");
const toggleMusicSound = document.getElementById("togglesound");
const soundon = directory_root+"/gameimages/soundon.png"
const soundoff = directory_root+"/gameimages/soundoff.png"


function sound(src) {
    if (gameMusicSound == true){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("loop", "loop");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}else{
    this.play = function(){
        return null
    }
    this.stop = function(){
        return null
    }    
}
}

const togglemusicsound = () => {
    if(gameMusicSound){
        gameMusic.stop();
        toggleMusicSound.src = "./gameimages/soundoff.png"
        gameMusicSound = !gameMusicSound;
    }else{
        if(!gameMusicSound){
            gameMusic.play();
            toggleMusicSound.src = "./gameimages/soundon.png"
            gameMusicSound = !gameMusicSound;
        }
    }
}
