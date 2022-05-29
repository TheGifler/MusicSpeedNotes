const rSemibreveResults = document.getElementById(`semibrevecorrect`);
const rMinumResults = document.getElementById(`minumcorrect`);
const rCrotchetResults = document.getElementById(`crotchetcorrect`);
const rQuaverResults = document.getElementById(`quavercorrect`);
const rTiedQuaversResults = document.getElementById(`tiedquavercorrect`);
const rSemiquaverResults = document.getElementById(`semiquavercorrect`);

const rTotalResults = document.getElementById(`totalresults`);
const rResultsScreen = document.getElementById(`results`);




const displayResults = () =>{
    let totalAttempts = 0;
    let totalCorrect = 0;
    const checkArray = (notename) =>{
        for (let i = 0; i < MNVArray.length;i++){
            if (MNVArray[i].name == `${notename}` && MNVArray[i].attempts > 0){
                document.getElementById(`${notename.toLowerCase().replace(/\s+/g, '')}result`).style.display = `block`;
                let reference = eval("r" + notename.replace(/\s+/g, '') + "Results"); //changes the reference into the element variable
               console.log(reference);
               let referencePencentage = ((100*(MNVArray[i].correct / MNVArray[i].attempts)).toFixed(2))
                reference.innerHTML = `You answered correctly ${MNVArray[i].correct} out of the ${MNVArray[i].attempts} times. <br> ${referencePencentage}%`
                totalAttempts += MNVArray[i].attempts;
                totalCorrect += MNVArray[i].correct;

            }
        } 
    }
    checkArray(`Semibreve`);
    checkArray(`Minum`);
    checkArray(`Crotchet`);
    checkArray(`Quaver`);
    checkArray(`Tied Quavers`);
    checkArray(`Semiquaver`);
    let percentage = (100*(totalCorrect / totalAttempts));
    let grade;
    if (percentage >= 70){
        grade = "Grade: A"
    }else if (percentage > 60){
        grade = "Grade: B";
    }else if (percentage > 50){
        grade = "Grade: C";
    }else if (percentage > 40){
        grade = "Grade: D";
    }else{
        grade = "";
    }
    
    rTotalResults.innerHTML = `In total you managed to get ${percentage.toFixed(2)}% <br> ${grade}`;

    
    

}
