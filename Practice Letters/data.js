function Data() {
  letters = {
    ' ': '/',
    'emp': 'e',
    'A': '.-',  
    'B': '-...',   
    'C': '-.-.',
    'D': '-..',  
    'E': '.',  
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',

    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.'
  }
  wordsData = [
    ["you", "he", "she", "it", "we", "you", "they"],
    ["is", "are", "attack", "attacks", "eat", "eats"],
    ["my", "your", "its", "a", "an", "the"],
    ["ant", "dog", "cat", "buddy", "skeleton", "computer", "house", "giraffe", "balcony", "flower", "pet"],
    ["which", "who", "that"],
    ["is", "are", "use", "uses", "tell", "tells"],
    ["my", "your", "its", "a", "an", "the"], 
    ["apple", "story", "knife", "pet", "watermelon", "chicken"]
  ]
  this.setUpMorseCode = () => {
    //get the ramdom words to create a sentence
    for(let i = 0 ; i < wordsData.length; i++) {
      wordsText += wordsData[i][random(wordsData[i].length)] + " ";
    }
    wordsText = wordsText.substring(0, wordsText.length - 1);
    console.log(wordsText);

    //change words to morse code
    wordsText = wordsText.toUpperCase();
    for(let i = 0; i < wordsText.length; i++) {
      morseText += letters[wordsText[i]];
      i != wordsText.length - 1 ? morseText += " " : 0;
    }
    console.log(morseText);
  }
}