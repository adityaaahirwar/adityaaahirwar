import { useState } from "react";
import "./App.css";

function App() {
  const [phirCount, setPhirCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [conversation, setConversation] = useState([]);

  const questions = [
    "Phir kya kiya?",
    "Phir aapne kya socha?",
    "Phir baat kya hui?",
    "Phir tumne khana khaya?",
    "Phir coding shuru ki?",
    "Phir neend aayi ya nahi?",
  ];

  const messages = [
    "Phir 🤷",
    "Phir == Phir, but why?",
    "Phir kuch aur bolo yaar!",
    "Phir soch lo 😂",
    "Bas Phir hi karte rehoge?",
    "Phir... 🤦‍♂️",
  ];

  const askQuestion = () => {
    const question = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(question);
    setConversation((prev) => [...prev, `🤔 Question: ${question}`]);
  };

  const handlePhirClick = () => {
    setPhirCount(phirCount + 1);
    const message = messages[Math.floor(Math.random() * messages.length)];
    setConversation((prev) => [...prev, `😄 Response: ${message}`]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Phir Game: Endless Fun! 🤔</h1>
        <div className="card">
          <button onClick={handlePhirClick}>
            Phir clicked {phirCount} times!
          </button>
          <button onClick={askQuestion}>Ask a Random Question</button>
        </div>
        <h3>{currentQuestion}</h3>
        <div className="conversation-box">
          <h2>Conversation:</h2>
          <ul>
            {conversation.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
        <footer>
          <p>
            Cuteeeiiiiiiii! 😂
          </p>
        </footer>
      </header>
    </div>
  );
}

export default App;
