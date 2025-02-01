import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizHolder';
import '../style/Result.css';

const Result = () => {
  const { correct, setCorrect, setExit, setStart, quizData } = useContext(QuizContext);
  const testAgain = () => {
    setExit(false);
    setStart(false);
    setCorrect(0);
  }
  return (
    <div className="result-container">
      <div className="result-show">
        <h2 className="result-correct">{correct} are correct out of {quizData.length}. </h2>
         <div className='result-btns'>
         <button className="result-btn" onClick={testAgain}>Test Again!</button>
         <button className="result-btn" onClick={testAgain}>Go To Home</button>
         </div>
      </div>
    </div>
  )
}

export default Result;

