
//Gameplate 

  //grab elements from HTML
  const eGamePlate = document.getElementById("gameplate");
  const eGameScene1 = document.getElementsByClassName("gamescene1");
  const eQuestionImages = document.getElementsByClassName("questionelements");
  const eQuestionTexts = document.getElementsByClassName("questiontexts");
      //Question images
  const eQuestionPic1 = document.getElementById("questionpic1");
  const eQuestionPic2 = document.getElementById("questionpic2");
  const eOperator = document.getElementById("operator");
      //Question Text
  const eQuestionText1 = document.getElementById("questiontext1");
  const eQuestionText2 = document.getElementById("questiontext2");
  const eOperatorText = document.getElementById("operatortext");
    //Buttons
  const eButtonChoices = document.getElementsByClassName("buttonchoices")
  const eNextQuestion = document.getElementById("nextquestion");
  const eButtonChoice0 = document.getElementById("buttonchoice0");
  const eButtonChoice1 = document.getElementById("buttonchoice1");
  const eButtonChoice2 = document.getElementById("buttonchoice2");
    //ScoreBoard
  const eScoreFrame = document.getElementsByClassName("scoreframe");
  const eScore = document.getElementById("score");
  const eScorePoints = document.getElementById("scorepoints");
    //Feedback
  const eFeedback = document.getElementsByClassName("feedback");
  const eFeedbackInfo = document.getElementById("feedbackinfo");
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