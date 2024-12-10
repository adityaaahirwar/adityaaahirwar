import { useState } from 'react';
import './App.css';

function App() {
  const [phirCount, setPhirCount] = useState(0);
  const messages = [
    "Phir kya? 🤔",
    "Phir == Phir ✅",
    "Phir kuch aur bolo! 🎤",
    "Phir se Phir? 🤷‍♂️",
    "Phir... Ab bas kar! 😂",
    "Phir clicked! 🔥",
    "Phir overload incoming... 🚀",
  ];

  const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const bgColor = `hsl(${phirCount * 30 % 360}, 70%, 80%)`;

  return (
    <div className="App" style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }}>
      <header className="App-header" style={{ textAlign: "center", color: "#333" }}>
        <h1 style={{ fontSize: "3rem", fontFamily: "Comic Sans MS, sans-serif" }}>🔥 Phir Counter 🔥</h1>
        <div
          className="card"
          style={{
            margin: "20px auto",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            backgroundColor: "#fff",
          }}
        >
          <button
            onClick={() => setPhirCount(phirCount + 1)}
            style={{
              padding: "15px 30px",
              border: "none",
              borderRadius: "25px",
              backgroundColor: "#007bff",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
              boxShadow: "0 5px 10px rgba(0, 123, 255, 0.3)",
              transition: "transform 0.2s, background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
          >
            Phir clicked {phirCount} times! 🚀
          </button>
          <p style={{ marginTop: "15px", fontSize: "1.2rem", fontFamily: "Arial, sans-serif" }}>
            {getRandomMessage()}
          </p>
        </div>
        <footer style={{ marginTop: "30px", fontSize: "1rem", fontStyle: "italic" }}>
          Made for fun. Keep clicking Phir if (Phir === "Phir")! 🎉
        </footer>
      </header>
    </div>
  );
}

export default App;
