//Audio Files
let gameMusicSound = true;
const aCorrectPing = "./soundfiles/correctsfx.mp3";
const aIncorrectAnswer = "./soundfiles/wronganswer.mp3";
const gameMusic = new sound("./soundfiles/Puzzles.wav");
const startMenuMusic = new sound("./soundfiles/Nostalgic.wav");
const toggleMusicSound = document.getElementById("togglesound");
const soundon = "./gameimages/soundon.png"
const soundoff = "./gameimages/soundoff.png"


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
