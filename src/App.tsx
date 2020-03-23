import React, {useState} from 'react';
import './App.css';
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";

const App: React.FC = () => {
    const [outputText, setOutputText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        Welcome to chatty and chatora!
      </header>
        <section>
            <TextInput onChange={(t) => setOutputText(t)}/>
            <TextOutput text={outputText}/>
        </section>
    </div>
  );
}

export default App;
