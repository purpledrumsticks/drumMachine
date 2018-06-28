import React, {
  Component
} from 'react';
import '../App.css';

class Pad extends Component {
  constructor(props) {
    super(props);
    this.state = {class: 'pad'}
    this.playSound = this.playSound.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    document.addEventListener("keyup", this.handleKeyUp.bind(this));
  }
  playSound(e) {
    const sound = new Audio(this.props.sound);
    sound.play();
  }
  handleKeyDown(event) {
    if (event.key === this.props.keyPad) {
      this.playSound();
      if (this.state.class === 'pad') {
         this.setState({class: 'selectedPad'});
       } else {
         this.setState({class: 'pad'});
       }
    }
  }
  handleKeyUp(event) {
    if (event.key === this.props.keyPad) {
      this.setState({class: 'pad'});
    }
  }
  render() {
    return (<div
             id="padItem"
             className={this.state.class}
             onClick={this.playSound}
             onKeyDown={this.handleKeyDown}
             onKeyUp={this.handleKeyUp}
             tabIndex={this.props.tab}
           />);
  }
}

export default Pad;
