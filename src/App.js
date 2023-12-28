import React from "react";
import HomePage from "./Components/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import QuizData from "./Components/QuizData";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/Quizdata" element={<QuizData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
