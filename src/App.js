import './App.css';
import Speech from 'react-speech';

const style = {
  container: {},
  text: {},
  buttons: {},
  play: {
    hover: {
      backgroundColor: 'GhostWhite'
    },
    button: {
      width: '28',
      height: '28',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'yellow',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    },
  },
  pause: {
    play: {},
    hover: {}
  },
  stop: {
    play: {
      hover: {},
      button: {}
    },
    resume: {
      play: {
        hover: {},
        button: {}
      }
    }
  }
};

const buttonStyle = {
  play: {
    button: {
      width: '28',
      height: '28',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'yellow',
      border: 'solid 1px rgba(255,255,255,1)',
      borderRadius: 6
    },
  }
};


const App = () => {
  return <div className="App">
    <h1>testing-react-speech</h1>

    <div className="speeches-container">
      <div className="speech-box">
        <Speech
          text="I have the default settings" />
      </div>

      <div className="speech-box">
        <Speech
          text="I have altered my voice"
          voice="Google UK English Female" />
      </div>

      <div className="speech-box">
        <Speech
          // styles={buttonStyle}
          text="I have changed the colour of the play button and made it smaller" />
      </div>

      <div className="speech-box">
        <Speech
          text="I have altered the pitch, rate and volume of my voice"
          pitch="0.5"
          rate="0.5"
          volume="0.1"
          lang="en-GB"
          voice="Daniel" />
      </div>

      <div className="speech-box">
        <Speech
          text="I have all properties set to their default"
          pitch="1"
          rate="1"
          volume="1"
          lang="en-GB"
          voice="Google UK English Male" />
      </div>

      <div className="speech-box">
        <Speech
          stop={true}
          pause={true}
          resume={true}
          text="I am displaying all buttons" />
      </div>

      <div className="speech-box">
        <Speech
          textAsButton={true}
          displayText="Hello"
          text="I have text displayed as a button" />
      </div>
    </div>
  </div>
}

export default App;
