import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="Contain">
      <h1 style={{ color: "blue" }}>Welcome To Game Quiz</h1>
      <Link to="/Quizdata">
        <button
          style={{
            width: "5rem",
            height: "3rem",
            borderRadius: "4px",
            backgroundColor:'red',
            color:'white'
          }}
        >
          Start Quiz
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
