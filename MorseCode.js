import { useState } from "react";
import Header from "../Components/Header";

export default function MorseCode() {
  const [outputResult, setOutputResult] = useState("");
  const [translateMorse, setTranslateMorse] = useState(true);
  const letterToMorse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
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
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
    " ": "/",
  };
  const morseToLetter = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    ".----.": "'",
    "-.-.--": "!",
    "-..-.": "/",
    "-.--.": "(",
    "-.--.-": ")",
    ".-...": "&",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    ".-.-.": "+",
    "-....-": "-",
    "..--.-": "_",
    ".-..-.": '"',
    "...-..-": "$",
    ".--.-.": "@",
    "/": " ",
  };
  function switchTranslation() {
    setTranslateMorse(!translateMorse);
  }

  const inputRef = useRef(null);

  function clearText() {
    setOutputResult("");
    inputRef.current.value = "";
  }

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const converted = translateMorse
      ? convertToMorse(inputValue)
      : convertToText(inputValue);
    setOutputResult(converted);
  };

  function convertToMorse(word) {
    const array = word.toLowerCase().split("");
    const convertedArray = array.map(
      (letter) => letterToMorse[letter] + " " || ""
    );
    return convertedArray;
  }
  function convertToText(morseCode) {
    const morseWords = morseCode.split(" ");
    const text = morseWords.map((morse) => morseToLetter[morse] || "").join("");

    return text;
  }

  // eslint-disable-next-line no-unused-vars
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    const textToCopy = outputResult;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
      })
      .catch((error) => console.error("Copy failed: ", error));
  };

  return (
    <>
      <div className="container">
        <Header />
        <h2 className="title">
          <span className="span-title">&lt;</span> Morse Code Translator{" "}
          <span className="span-title">&gt;</span>
        </h2>
        <div className="morse-container">
          <div>
            <div className="input-container">
              <h1>Input:</h1>
              <input
                className="input-text"
                onChange={handleInputChange}
                placeholder={translateMorse ? "Text to Morse" : "Morse to text"}
                ref={inputRef}
              ></input>
            </div>
            <div className="output-container">
              <h1>Output:</h1>
              <div className="output-text">{outputResult}</div>
            </div>
            <button
              className="copy-btn"
              onClick={switchTranslation}
              style={{ marginRight: "0.5rem" }}
            >
              Switch
            </button>
            <button
              className="copy-btn"
              onClick={clearText}
              style={{ marginRight: "0.5rem" }}
            >
              Clear
            </button>
            <button className="copy-btn" onClick={copyText}>
              Copy
            </button>
          </div>
          <div style={{ display: "block" }}>
            <p>
              Morse code is a method used in telecommunication to encode text
              characters as standardized sequences of two different signal
              durations, called dots and dashes, or dits and dahs. Morse code is
              named after{" "}
              <a href="https://en.wikipedia.org/wiki/Samuel_Morse">
                Samuel Morse
              </a>
              , one of the early developers of the system adopted for electrical
              telegraphy.
            </p>
            <p>
              <a href="https://en.wikipedia.org/wiki/Morse_code#/media/File:International_Morse_Code.svg">
                Here
              </a>{" "}
              is a photo list with al the characters in morse code{" "}
            </p>
            <p>
              You can read more about Morse code on{" "}
              <a href="https://en.wikipedia.org/wiki/Morse_code">wikipedia</a>
            </p>
          </div>
        </div>
        <div className="morse-table">
          <table border="1">
            <tr>
              <th>Letter</th>
              <th>Morse Code</th>
              <th>Letter</th>
              <th>Morse Code</th>
              <th>Letter</th>
              <th>Morse Code</th>
              <th>Letter</th>
              <th>Morse Code</th>
              <th>Letter</th>
              <th>Morse Code</th>
            </tr>
            <tr>
              <td>a</td>
              <td>.-</td>
              <td>b</td>
              <td>-...</td>
              <td>c</td>
              <td>-.-.</td>
              <td>d</td>
              <td>-..</td>
              <td>e</td>
              <td>.</td>
            </tr>
            <tr>
              <td>f</td>
              <td>..-.</td>
              <td>g</td>
              <td>--.</td>
              <td>h</td>
              <td>....</td>
              <td>i</td>
              <td>..</td>
              <td>j</td>
              <td>.---</td>
            </tr>
            <tr>
              <td>k</td>
              <td>-.-</td>
              <td>l</td>
              <td>.-..</td>
              <td>m</td>
              <td>--</td>
              <td>n</td>
              <td>-.</td>
              <td>o</td>
              <td>---</td>
            </tr>
            <tr>
              <td>p</td>
              <td>.--.</td>
              <td>q</td>
              <td>--.-</td>
              <td>r</td>
              <td>.-.</td>
              <td>s</td>
              <td>...</td>
              <td>t</td>
              <td>-</td>
            </tr>
            <tr>
              <td>u</td>
              <td>..-</td>
              <td>v</td>
              <td>...-</td>
              <td>w</td>
              <td>.--</td>
              <td>x</td>
              <td>-..-</td>
              <td>y</td>
              <td>-.--</td>
            </tr>
            <tr>
              <td>z</td>
              <td>--..</td>
              <td>0</td>
              <td>-----</td>
              <td>1</td>
              <td>.----</td>
              <td>2</td>
              <td>..---</td>
              <td>3</td>
              <td>...--</td>
            </tr>
            <tr>
              <td>4</td>
              <td>....-</td>
              <td>5</td>
              <td>.....</td>
              <td>6</td>
              <td>-....</td>
              <td>7</td>
              <td>--...</td>
              <td>8</td>
              <td>---..</td>
            </tr>
            <tr>
              <td>9</td>
              <td>----.</td>
              <td>.</td>
              <td>.-.-.-</td>
              <td>,</td>
              <td>--..--</td>
              <td>?</td>
              <td>..--..</td>
              <td>'</td>
              <td>.----.</td>
            </tr>
            <tr>
              <td>!</td>
              <td>-.-.--</td>
              <td>/</td>
              <td>-..-.</td>
              <td>(</td>
              <td>-.--.</td>
              <td>)</td>
              <td>-.--.-</td>
              <td>&amp;</td>
              <td>.-...</td>
            </tr>
            <tr>
              <td>:</td>
              <td>---...</td>
              <td>;</td>
              <td>-.-.-.</td>
              <td>=</td>
              <td>-...-</td>
              <td>+</td>
              <td>.-.-.</td>
              <td>-</td>
              <td>-....-</td>
            </tr>
            <tr>
              <td>_</td>
              <td>..--.-</td>
              <td>"</td>
              <td>.-..-.</td>
              <td>$</td>
              <td>...-..-</td>
              <td>@</td>
              <td>.--.-.</td>
              <td>;</td>
              <td>-.-.-.</td>
            </tr>
            <tr>
              <td>_</td>
              <td>..--.-</td>
              <td>=</td>
              <td>-...-</td>
              <td>+</td>
              <td>.-.-.</td>
              <td>-</td>
              <td>-....-</td>
              <td> </td>
              <td>/</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
