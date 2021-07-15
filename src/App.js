import './App.css';
import Speech from 'react-speech';

const App = () => {
  return <div className="App">
    <h1>testing-react-speech</h1>
    <Speech
      text="I have the default settings" />
    <Speech
      text="I have altered my voice"
      voice="Google UK English Female" /></div>
}

export default App;
