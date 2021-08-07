const speed = 100;

var beep = new Audio('../Sounds/beep.mp3');
var data;
var wordsText = "", morseText = "", wordsData= [], letter = {}, timeouts = [], check = 1;
var wordsInp = "";

//set up value of div and button
var correctIC = document.getElementById('correct');
var incorrectIC = document.getElementById('incorrect');
var resultPlace = document.getElementById('resultPlace');
var wordsInpID = document.getElementById("wordsInp");

function random(x) {
  return Math.floor(Math.random() * x);
}

function deleteCheckIcon (){
  correctIC.style.display = "none";
  incorrectIC.style.display = "none";
}


function setUpValue() {
  morseText = "", wordsText = "", check = 1;
  deleteCheckIcon();
  //reset value of the input and result
  resultPlace.textContent = "_______________________";
  wordsInpID.value = "";

  //clear all timeOut events
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  timeouts = [];

  //stop the previous sounds  
  beep.pause();
  beep.currentTime = 0;
}

function start() {
  setUpValue();
  data = new Data();
  data.setUpMorseCode();
}

function checkResult() {
  deleteCheckIcon();
  
  //check if the input of user is the same of the result
  var wordsInp = wordsInpID.value; 
  wordsText = wordsText.toUpperCase();
  wordsInp = wordsInp.toUpperCase();
  if(wordsInp.length != wordsText.length) check = 0;
  if(check) {
    for(let i = 0; i < wordsInp.length; i++) {
      if(wordsInp[i] != wordsText[i]) {
        check = 1; 
        break;
      }
    } 
  }

  //appear the result and correct or incorrect icon
  wordsText = wordsText.toLowerCase();
  resultPlace.textContent = wordsText;
  if(check) correctIC.style.display = "unset";
  else incorrectIC.style.display = "unset";
  
}

function playSounds() {
  //clear all setTimeOut events
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  timeouts = [];
  
  beep.currentTime = 0;
  let timeTaken = 0;
  //run morse Code
  console.log(morseText);
  for(let i = 0; i < morseText.length; i++) {
    switch(morseText[i]) {
      //if it is a dash
      case "-":
        //push the beep and pause
        timeouts.push( setTimeout(() => {
          beep.play();
        }, timeTaken));

        timeTaken += 3 * speed;
        timeouts.push( setTimeout(() => {
          beep.pause();
          beep.currentTime = 0;
        }, timeTaken));

        timeTaken += 1 * speed;
        break;

      //if it is a dot
      case ".":
        //push the beep and pause
        timeouts.push( setTimeout(() => {
          beep.play();
        }, timeTaken));

        timeTaken += 1 * speed;

        timeouts.push( setTimeout(() => {
          beep.pause();
          beep.currentTime = 0;
        }, timeTaken));

        timeTaken += 1 * speed;
        break;
      
      case " ":
        timeTaken += 3 * speed;
        break;

      case "/":
        timeTaken += 1 * speed;
        break;
    }
  }
}