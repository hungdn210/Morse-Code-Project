const speed = 100;
const LANG_BG = "#EDF1E8";
const LANG_BG_EMPT = "white";
const beep = new Audio('../Sounds/beep.mp3');

const inpAlp = document.getElementById("inpAlp");
const inpMC = document.getElementById("inpMC");
const outAlp = document.getElementById("outAlp");
const outMC = document.getElementById("outMC");

var letters= {}, morseCode = {};
var textInp = "", textOut = "", typeLang = 0;
var timeouts = [];

function changeBG(bg_1, bg_2) {
  inpAlp.style.backgroundColor = bg_1;
  outMC.style.backgroundColor = bg_1;
  inpMC.style.backgroundColor = bg_2;
  outAlp.style.backgroundColor = bg_2;
}

var resetInpOut = () => {
  document.getElementById("trans-input-type").value = "";
  document.getElementById("trans-output-type").value= "";
}

var changeLangButton = () => {
  stopSounds();
    if(!typeLang) {
      changeBG(LANG_BG_EMPT, LANG_BG);
      typeLang = 1;
    }
    else {
      changeBG(LANG_BG, LANG_BG_EMPT);
      typeLang = 0;
    }
    resetInpOut();
}

function changeLang() {
  stopSounds();
  if(!typeLang && inpAlp.style.backgroundColor != LANG_BG) {
    changeBG(LANG_BG, LANG_BG_EMPT); 
    resetInpOut();
  }
  else if(typeLang && inpAlp.style.backgroundColor != LANG_BG_EMPT) {
    changeBG(LANG_BG_EMPT, LANG_BG);
    resetInpOut();
  }
}

function start() {
  textInp = "", textOut = "";
  if(!typeLang) transWords();
  else transMorse();
}
document.getElementById('trans-input-type').addEventListener('input', start);

function transWords() {
    //get the input sentence
    var textInp = document.getElementById("trans-input-type").value; 
    textInp = textInp.toUpperCase();
    textInp = textInp.replace(/\s+/g, ' ');
  
    //change words to morse code
    for(let i = 0; i < textInp.length; i++) {
      textOut += letters[textInp[i]];
      i != textInp.length - 1 ? textOut += " " : 0;
    }
    document.getElementById("trans-output-type").value = textOut;
} 

function transMorse() {
  //get the input sentence
  var textInp = document.getElementById("trans-input-type").value;

  let curLoca = 0, curText = "";  
  while(curLoca < textInp.length) {
    if(textInp[curLoca] != " ") {
      curText += textInp[curLoca];
    }
    else {
      textOut += morseCode[curText];
      curText = "";
    }
    curLoca++;
  }
  if(morseCode[curText]) textOut += morseCode[curText];
  document.getElementById("trans-output-type").value = textOut;
}

function runSounds() {
  //clear all setTimeOut events
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
  timeouts = [];
  
  beep.currentTime = 0;
  let timeTaken = 0;
  //run morse Code
  for(let i = 0; i < textOut.length; i++) {
    switch(textOut[i]) {
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

function stopSounds() {
    //clear all setTimeOut events
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
    timeouts = [];
    beep.currentTime = 0;
    beep.pause();
}