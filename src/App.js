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
        <h6>default Speech</h6>
        <Speech
          text="I have the default settings" />
      </div>

      <div className="speech-box">
        <h6>voice Prop change</h6>
        <Speech
          text="I have altered my voice"
          voice="Google UK English Female" />
      </div>

      <div className="speech-box">
        <h6>Add style (all css properties / svg buggy by default)</h6>
        <Speech
          styles={style}
          text="I added some style! yo yo yo yo" />
      </div>

      <div className="speech-box svg-icon-display-fix">
        <h6>Add minimal style (with svg css fix)</h6>
        <Speech
          styles={simpleButton}
          text="I fixed the svg because I kick ass!" />
      </div>

      <div className="speech-box svg-icon-display-fix multiple-buttons-display-fix">
        <h6>Add minimal style (with svg css fix & rs-container css fix for multiple buttons) for all buttons</h6>
        <Speech
          styles={simpleAllButtons}
          // The booleans need to be added for the buttons to show
          stop={true}
          pause={true}
          resume={true}
          text="This is a very long sentence because I want to test if it works and stuff and maybe pause it" />
      </div>

      <div className="speech-box">
        <h6>textAsButton & displayText props</h6>
        <Speech
          textAsButton={true}
          displayText="Hello"
          text="I have text displayed as a button" />
      </div>

      <div className="speech-box">
        <h6>Pitch, rate, volume, lang & voice props</h6>
        <Speech
          text="I have altered the pitch, rate and volume of my voice"
          pitch="0.5"
          rate="0.5"
          volume="0.1"
          lang="en-GB"
          voice="Daniel" />
      </div>

      <div className="speech-box">
        <h6>Default props values</h6>
        <Speech
          text="I have all properties set to their default"
          pitch="1"
          rate="1"
          volume="1"
          lang="en-GB"
          voice="Google UK English Male" />
      </div>

      <div className="speech-box">
        <h6>Displaying buttons (fails!!)</h6>
        <Speech
          stop={true}
          pause={true}
          resume={true}
          text="I am displaying all buttons" />
      </div>
    </div>
  </div>
}

export default App;
