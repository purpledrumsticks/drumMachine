import React, { Component } from 'react';
import './App.css';
import Pad from './components/Pad';
import hellSounds from './sounds/hellSounds/hellSounds.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sounds: [
        hellSounds.a,
        hellSounds.s,
        hellSounds.d,
        hellSounds.f,
        hellSounds.g,
        hellSounds.h,
        hellSounds.j,
        hellSounds.k,
        hellSounds.l
      ]
    }
  }
  render() {
    return (
      <div className="App">
      {this.state.sounds.map((pad, i) => (
        <Pad
         sound={pad.sound}
         key={i}
         keyPad={pad.key}
         tab={i}
        />
      ))}
      </div>
    );
  }
}

export default App;
