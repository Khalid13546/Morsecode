const morseCodeMap = {
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
};
const reverseMorseCodeMap = {};
for (let key in morseCodeMap) {
  if (morseCodeMap.hasOwnProperty(key)) {
    reverseMorseCodeMap[morseCodeMap[key]] = key;
  }
}

const translateToMorse = () => {
  const inputText = document.getElementById("input").value.toUpperCase();
  let morseCode = "";
  for (let i = 0; i < inputText.length; i++) {
    let char = inputText[i];
    if (morseCodeMap[char]) {
      morseCode += morseCodeMap[char] + " ";
    }
  }
  document.getElementById("output").value = morseCode.trim();
};

const translateToText = () => {
  const inputMorse = document.getElementById("input").value;
  const morseArray = inputMorse.split(" ");
  let translatedText = "";
  for (let i = 0; i < morseArray.length; i++) {
    const code = morseArray[i];
    if (reverseMorseCodeMap[code]) {
      translatedText += reverseMorseCodeMap[code];
    } else if (code === "/") {
      translatedText += " ";
    }
  }
  document.getElementById("output").value = translatedText;
};
