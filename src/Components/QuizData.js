import React, { useRef, useState } from "react";
import "./QuizData.css";
import { data } from "../Assets/data";

function QuizData() {
  let [index, setindex] = useState(0);
  let [question, setquestion] = useState(data[index]);
  let [lock, setlock] = useState(false);
  let [score, setscore] = useState(0);
  let [result, setresult] = useState(false);
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);

  let option_array = [option1, option2, option3];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setlock(true);
        setscore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setlock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };
  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) setresult(true);
      return 0;
    }
  
    setindex(++index);
    setquestion(data[index]);
    setlock(false);
    option_array.map((option) => {
      option.current.classList.remove("wrong");
      option.current.classList.remove("correct");
      return null;
    });
  };
  return (
    <div className="container">
      <h1>Quiz Question</h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1}.{question.question}
          </h2>
          <ul>
            <li
              ref={option1}
              onClick={(e) => {
                checkAns(e, 1);
              }}
            >
              {question.option1}
            </li>
            <li
              ref={option2}
              onClick={(e) => {
                checkAns(e, 2);
              }}
            >
              {question.option2}
            </li>
            <li
              ref={option3}
              onClick={(e) => {
                checkAns(e, 3);
              }}
            >
              {question.option3}
            </li>
            
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index+1} of {data.length} questions
          </div>
        </>
      )}
      {result?<>
        <h2>
        {" "}
        your score {score} out of {data.length}
      </h2>
      </>:<></>}
     
      {/* <h2>{index+1}.{question.question}</h2>
      <ul>
        <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li  ref={option2}  onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
      </ul>
      <button onClick={next}>Next</button>
      <div>
        {index+1} of {data.length} questions
      </div> */}
    </div>
  );
}

export default QuizData;
