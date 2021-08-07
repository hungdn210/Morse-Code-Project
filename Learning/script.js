const IC_START = document.getElementById("main-start");
const IC_OP_NUMBERS = document.getElementById("main-op-numbers");
const IC_OP_LETTERS = document.getElementById("main-op-letters");
const IC_CONFIDENCE = document.getElementById("tools-confidence");
const CARDS = document.getElementById("main-cards");
const CARDS_ALP = document.getElementById("main-cards-alphabet");
const CARDS_MOR = document.getElementById("main-cards-morseCode");
const NEXT_FC = document.getElementById("tools-nextCards");
const QUESTION = document.getElementById("main-practice");
const AMOUNT_NUMBERS = 10;
const AMOUNT_LETTERS = 26;
const AMOUNT_COLORS = 10;
var typeFC = 0, curValue = 0;
var listNumbers = [], listLetters = [], listBGColors = [];

listNumbers= [
  {number: 0, morseCode: '-----'},
  {number: 1, morseCode: '.----'},
  {number: 2, morseCode: '..---'},
  {number: 3, morseCode: '...--'},
  {number: 4, morseCode: '....-'},
  {number: 5, morseCode: '.....'},
  {number: 6, morseCode: '-....'},
  {number: 7, morseCode: '--...'},
  {number: 8, morseCode: '---..'},
  {number: 9, morseCode: '----.'}
];

listLetters = [
  {letter: 'a', morseCode: '.-'},
  {letter: 'b', morseCode: '-...'},
  {letter: 'c', morseCode: '-.-.'},
  {letter: 'd', morseCode: '-..'},
  {letter: 'e', morseCode: '.'},
  {letter: 'f', morseCode: '..-.'},
  {letter: 'g', morseCode: '--.'},
  {letter: 'h', morseCode: '....'},
  {letter: 'i', morseCode: '..'},
  {letter: 'j', morseCode: '.---'},
  {letter: 'k', morseCode: '-.-'},
  {letter: 'l', morseCode: '.-..'},
  {letter: 'm', morseCode: '--'},
  {letter: 'n', morseCode: '-.'},
  {letter: 'o', morseCode: '---'},
  {letter: 'p', morseCode: '.--.'},
  {letter: 'q', morseCode: '--.-'},
  {letter: 'r', morseCode: '.-.'},
  {letter: 's', morseCode: '...'},
  {letter: 't', morseCode: '-'},
  {letter: 'u', morseCode: '..-'},
  {letter: 'v', morseCode: '...-'},
  {letter: 'w', morseCode: '.--'},
  {letter: 'x', morseCode: '-..-'},
  {letter: 'y', morseCode: '-.--'},
  {letter: 'z', morseCode: '--..'}
];

listBGColors = [
  '#FFC409',
  '#E8FF09',
  '#82FF09',
  '#09FF66',
  '#09FFE0',
  '#AEC7F8',
  '#C6AEF8',
  '#E0F8AE',
  '#F8AEF7',
  '#F8AEAE'
] 

function random(x) {
  return Math.floor(Math.random() * x);
} 

var disIC = (icon, style) => {
  icon.style.display = style;
}

var appearQues = () => {
  disIC(CARDS, "none");
  disIC(NEXT_FC, "none");
  disIC(IC_CONFIDENCE, "none");
  disIC(QUESTION, "inline-block");
}

var moveToPractice = () => {
  if(!typeFC) window.location.href = "../Practice Numbers/index.html";
  else window.location.href = "../Practice Letters/index.html";
}

var delStart = () => {
  disIC(IC_START, "none");
  disIC(IC_OP_NUMBERS, "inline-block");
  disIC(IC_OP_LETTERS, "inline-block");
}

function setUpValue() {
  typeFC = 0;
  disIC(IC_START, "inline-block");
  disIC(IC_OP_NUMBERS, "none");
  disIC(IC_OP_LETTERS, "none");
  disIC(CARDS, "none");
  disIC(NEXT_FC, "none");
  disIC(IC_CONFIDENCE, "none");
  disIC(QUESTION, "none");
}

function start() {
  setUpValue(); 
}

function run() {
  disIC(IC_OP_NUMBERS, "none");
  disIC(IC_OP_LETTERS, "none");
  disIC(CARDS, "inline-block");
  disIC(NEXT_FC, "inline-block");
  disIC(IC_CONFIDENCE, "inline-block");
}

function changeFC() {
  if(!typeFC) {
    var tempValue = random(AMOUNT_NUMBERS);
    while(tempValue == curValue) tempValue = random(AMOUNT_NUMBERS);
    curValue = tempValue;
    CARDS_ALP.textContent = listNumbers[curValue].number;
    CARDS_MOR.textContent = listNumbers[curValue].morseCode;
  }
  else {
    var tempValue = random(AMOUNT_LETTERS);
    while(tempValue == curValue) tempValue = random(AMOUNT_LETTERS);
    curValue = tempValue;
    CARDS_ALP.textContent = listLetters[curValue].letter;
    CARDS_MOR.textContent = listLetters[curValue].morseCode;
  }
  CARDS.style.backgroundColor = listBGColors[random(AMOUNT_COLORS)];
}