import { useState } from "react";
import Header from "../Components/Header";

export default function MorseCode() {
  const [outputResult, setOutputResult] = useState("");
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

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const converted = convertToMorse(inputValue);
    setOutputResult(converted);
  };

  function convertToMorse(word) {
    const array = word.toLowerCase().split("");
    const convertedArray = array.map(
      (letter) => letterToMorse[letter] + " " || ""
    );
    return convertedArray;
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
              ></input>
            </div>
            <div className="output-container">
              <h1>Output:</h1>
              <div className="output-text">{outputResult}</div>
            </div>
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
      </div>
    </>
  );
}
