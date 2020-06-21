import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import backgroundImage from './assets/background.jpg';

export default class App extends Component {
  constructor(props) {
      super(props);

      this.onChangeText = this.onChangeText.bind(this);
      this.getMorseCode = this.getMorseCode.bind(this);
  }

  morseCodes = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
  };

  state = {
    name: '',
  };

  onChangeText = event => {
    let text = event.target.value;
    this.setState({ name: text });
    let morseCodeOutput = this.getMorseCode(text);
    this.setState({ morseCode: morseCodeOutput});
  }

  getMorseCode = text => {
    var string = text;
    let morseCode = '';
    
    for (var i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      let elementCode = '';
      if (char === ' ') {
        elementCode = '\xa0\xa0\xa0';
      } else if (char === '.') {
        elementCode = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
      } else {
        elementCode = this.morseCodes[char];
      }

      morseCode = morseCode + (elementCode ? elementCode : '');
    }

    return morseCode;
  }

  render() {
    return (
      <div style={{ backgroundImage: `url(${backgroundImage})`, width: '100vw', height: '100vh' }}>
        <div style={{ position: 'absolute', top: '15vh', justifyContent: 'center', width: '100%', display: 'flex' }}>
          <input style={{height: '4rem', width: 'auto', minWidth: '250px', maxWidth: '80vw', fontSize: '4rem'}} onChange={this.onChangeText}/>
        </div>

        <div style={{ position: 'absolute', bottom: '15vh', justifyContent: 'center', width: '100%', display: 'flex' }}>
          <div style={{minHeight: '4rem', width: 'auto', minWidth: '250px', maxWidth: '80vw', fontSize: '3rem', backgroundColor: 'black', color: 'white'}}>
              {this.state.morseCode}
          </div>
        </div>
        <div style={{position: 'absolute', bottom: 0, backgroundColor: 'white', width: '100%', justifyContent: 'center', display: 'flex', fontStyle: 'italic'}}>
          {'© Karan Asthana ©'}
        </div>
      </div>
    )
  }
}