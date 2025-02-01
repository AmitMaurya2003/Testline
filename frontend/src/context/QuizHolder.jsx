import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import axios from 'axios'; 

const QuizContext = createContext(); 

export default function QuizHolder(porps) {
    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [quizData, setQuizData] = useState([]);
    const [error, setError] = useState("");
    const [correct, setCorrect] = useState(0);
    const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  
  const URL = "http://localhost:8080";

  const fectchData = async (url) => {
    try {
        const response = await axios.get(url);
        const data = response.data.questions;
      setQuizData(data);
    } catch (err) {
    //  console.log("error comes during fetch");
     const error = err.message;
     setError(error);
    }
 };

  useEffect(() => {
    fectchData(`${URL}/quiz-data`);
  }, []); 
    
    return (
        <QuizContext.Provider value={{start, exit, setStart, setExit, quizData, correct, setCorrect, timeLeft, setTimeLeft, error, setError}}>
            {porps.children}
        </QuizContext.Provider>
    )
};

export  { QuizContext };