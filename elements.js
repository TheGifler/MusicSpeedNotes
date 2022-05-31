
//Gameplate 

  //grab elements from HTML
  let eGamePlate = document.getElementById("gameplate");
  let eGameScene1 = document.getElementsByClassName("gamescene1");
  let eGameBorder1 = document.getElementById("gameborder1")
  let eQuestionImages = document.getElementsByClassName("questionelements");
  let eQuestionTexts = document.getElementsByClassName("questiontexts");
      //Question images
  let eQuestionPic1 = document.getElementById("questionpic1");
  let eQuestionPic2 = document.getElementById("questionpic2");
  let eOperator = document.getElementById("operator");
   //Question Text
  let eQuestionText1 = document.getElementById("questiontext1");
  let eQuestionText2 = document.getElementById("questiontext2");
  let eOperatorText = document.getElementById("operatortext");
     //Buttons
  let eButtonChoices = document.getElementsByClassName("buttonchoices")
  let eNextQuestion = document.getElementById("nextquestion");
  let eButtonChoice0 = document.getElementById("buttonchoice0");
  let eButtonChoice1 = document.getElementById("buttonchoice1");
  let eButtonChoice2 = document.getElementById("buttonchoice2");
      //ScoreBoard
  let eScoreFrame = document.getElementsByClassName("scoreframe");
  let eScore = document.getElementById("score");
  let eScorePoints = document.getElementById("scorepoints");
       //Feedback
  let eFeedback = document.getElementsByClassName("feedback");
  let eFeedbackInfo = document.getElementById("feedbackinfo");
           //Menu Screen

  const eButtonStartGame = document.getElementById("startgamebutton");
  const eStartMenu = document.getElementById("startmenu");
  const eSettings = document.getElementById("gamesettings")
  const eBackButton = document.getElementById("backbutton");
  const eNoteSelect = document.getElementById("noteselectmenu");
  const eGameMusic = document.getElementById("gamemusictoggle");

  //Settings

  let eAudioEnable;
  let eTimerButton;
  
  
  //Results Page
 const  rEndTime = document.getElementById("endtime");