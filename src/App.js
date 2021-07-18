import './App.css';
import Speech from 'react-speech';
import voices from './voices';
import { style, simpleButton, simpleAllButtons, smallButton } from './customised-styles';


const App = () => {
  return <div className="App">
    <h1>testing-react-speech</h1>

    <div className="speeches-container">
      <div className="speech-box">
        <div className="title">default Usage (CSS Buggy by default)</div>
        <Speech
          text="This is the default Usage" />
      </div>

      <div className="speech-box">
        <div className="title">Add style, styling all CSS properties (Ugly!)</div>
        <Speech
          styles={style}
          text="I added some style on all the see hess hess properties!" />
      </div>

      {/* There are css bugs with the svg icons display - fixed with cvg-icon-display-fix class */}
      <div className="speech-box svg-icon-display-fix">
        <div className="title">Minimal style for the Play button</div>
        <Speech
          styles={simpleButton}
          text="I fixed the ayssveegee because I kick ass!" />
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
          text="Hello, that's what the button says"
          voice="Daniel" />
      </div>

      <div className="speech-box center-button">
        <div className="title">Change Pitch, rate, volume, lang & voice props</div>
        <Speech
          styles={simpleButton}
          text="I am Daniel. I have altered the pitch, rate and volume of my voice"
          pitch="0.1" // 1 default value / min=0 max=2 step=1
          rate="0.5" // aka the speed / 1 default value / max=3.5 min=0.5 step=0.5
          volume="0.3" // 1 default value / max=1 min=0 step=0.1
          lang="en-GB" // 1 default value / EN-GB, EN-US are teh options
          voice="Daniel" // default value of the browser I guess
        />
      </div>

      <div className="speech-box full-row">
        <div className="title">All the possible voices</div>
        <div className="displayFlex">
          {voices.map(({ name, message, country }) => {
            return <div className="displayFlex flexColumn">
              {country}
              <Speech
                styles={smallButton}
                text={message}
                voice={name} />
            </div>
          })}
        </div>
      </div>
    </div>
  </div >
}

export default App;
