import { useState } from 'react';
import './App.css';

function App() {
  const [phirCount, setPhirCount] = useState(0);
  const messages = [
    "Phir kya?",
    "Phir == Phir",
    "Phir kuch aur bolo!",
    "Phir se Phir?",
    "Phir... 🤦‍♂️",
  ];

  const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Phir Counter 🤔</h1>
        <div className="card">
          <button onClick={() => setPhirCount(phirCount + 1)}>
            Phir clicked {phirCount} times!
          </button>
          <p>{getRandomMessage()}</p>
        </div>
        <footer>
          <p>
            Cuteeii...! 😂
          </p>
        </footer>
      </header>
    </div>
  );
}

export default App;
