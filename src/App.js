import './App.css';
import Speech from 'react-speech';

const style = {
  play: {
    hover: {
      backgroundColor: 'blue',
      color: 'white'
    },
    button: {
      padding: '5px',
      fontFamily: 'Helvetica',
      fontSize: '1.0em',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: '#4CAF50 solid 10px',
      backgroundColor: 'red',
      border: '3px solid orange',
      borderRadius: '15px',
      // if we define height and width, the play icons shows but it's not scaled or centered
      height: '50px',
      width: '200px',
      // to center or scale  it
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    // the svg needs to be styled via css with
    // display: block;
    // height: 100%;
  },
  pause: {
    hover: {},
    button: {},
  },
  stop: {
    hover: {},
    button: {},
  },
  resume: {
    hover: {},
    button: {},
  },
};

const minimalButtonStyle = {
  height: '40px',
  width: '40px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const minimalHoverButtonStyle = {
  backgroundColor: 'white'
}

// nb all buttons need to be listed even if not used
const simpleButton = {
  play: {
    hover: minimalHoverButtonStyle,
    button: minimalButtonStyle,
  },
  pause: {
    hover: {},
    button: {},
  },
  stop: {
    hover: {},
    button: {},
  },
  resume: {
    hover: {},
    button: {},
  },
};

const simpleAllButtons = {
  play: {
    hover: minimalHoverButtonStyle,
    button: minimalButtonStyle,
  },
  pause: {
    hover: minimalHoverButtonStyle,
    button: minimalButtonStyle,
  },
  stop: {
    hover: minimalHoverButtonStyle,
    button: minimalButtonStyle,
  },
  resume: {
    hover: minimalHoverButtonStyle,
    button: minimalButtonStyle,
  },
};


const App = () => {
  return <div className="App">
    <h1>testing-react-speech</h1>

    <div className="speeches-container">
      <div className="speech-box">
        <div className="title">default Usage (CSS Buggy by default)</div>
        <Speech
          text="I have the default settings" />
      </div>

      <div className="speech-box">
        <div className="title">Add style, styling all CSS properties (Ugly!)</div>
        <Speech
          styles={style}
          text="I added some style! yo yo yo yo" />
      </div>

      {/* There are css bugs with the svg icons display - fixed with cvg-icon-display-fix class */}
      <div className="speech-box svg-icon-display-fix">
        <div className="title">Minimal style for the Play button</div>
        <Speech
          styles={simpleButton}
          text="I fixed the svg because I kick ass!" />
      </div>

      {/* There are css bugs with the svg icons display - fixed with cvg-icon-display-fix class
      There are css bugs with the multiple buttons display - fixed with multiple-buttons-display-fix class */}
      <div className="speech-box svg-icon-display-fix multiple-buttons-display-fix">
        <div className="title">Display all control buttons (with minimal style)</div>
        <Speech
          styles={simpleAllButtons}
          // The booleans are mandatory for the buttons to show
          stop={true}
          pause={true}
          resume={true}
          text="This is a very long sentence because I want to test if it works and stuff and maybe pause it" />
      </div>

      <div className="speech-box center-button">
        <div className="title">Adding text in the play button</div>
        <Speech
          styles={simpleButton}
          textAsButton={true}
          displayText="Hello"
          text="I have text displayed as a button" />
      </div>

      <div className="speech-box center-button">
        <div className="title">Change Pitch, rate, volume, lang & voice props</div>
        <Speech
          styles={simpleButton}
          text="I have altered the pitch, rate and volume of my voice"
          pitch="0.5"
          rate="0.5"
          volume="0.1"
          lang="en-GB"
          voice="Daniel" />
      </div>

      <div className="speech-box center-button">
        <div className="title">Default props values</div>
        <Speech
          styles={simpleButton}
          text="I have all properties set to their default"
          pitch="1"
          rate="1"
          volume="1"
          lang="en-GB"
          voice="Google UK English Male" />
      </div>

      <div className="speech-box center-button">
        <div className="title">voice Prop change</div>
        <Speech
          styles={simpleButton}
          text="I have altered my voice"
          voice="Google UK English Female" />
      </div>
    </div>
  </div>
}

export default App;
