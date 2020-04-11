import React, {useState} from 'react';
import './App.css';
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";
import ReverseTextInput from './ReverseTextInput';

const App: React.FC = () => {
    const [outputText, setOutputText] = useState("");
    const [reverse, setReverse] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        Welcome to chatty and chatora!
      </header>
      <div className="settings-bar">
        <div className="primary-button" onClick={() => setReverse(true)}>Reverse</div>
      </div>
        <section>
            {reverse ? <ReverseTextInput onChange={(t) => setOutputText(t)}/> : <TextInput onChange={(t) => setOutputText(t)}/>}
            <TextOutput text={outputText}/>
        </section>
    </div>
  );
}

export default App;
