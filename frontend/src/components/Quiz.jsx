import React, { useContext, useState } from 'react';
import '../style/Quiz.css';
import { QuizContext } from '../context/QuizHolder';
import { useEffect } from 'react';
import duolingo from "../assets/duolingo.mp3";
import buzzerWrong from "../assets/buzzer-or-wrong.mp3";

const Quiz = () => {
    const [current, setCurrent] = useState(0);
    const {correct, timeLeft, setTimeLeft, setExit, error, setError, setStart, setCorrect } = useContext(QuizContext);

    const homePage = () => {
      setExit(false);
      setStart(false);
      setCorrect(0);
      setError("");
    }

//Timer for the Entire Quiz
  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Time's Up! Quiz Over.")
      setExit(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }; 

  return (
    <>  
      {error !== "" ? <div className='error-container'><h2 className='error'>{error}!</h2> <button onClick={homePage}>Go To Home</button></div> : 
    <div className='quiz-container'> 
         <div> <h2>Time left : { formatTime(timeLeft) }</h2> </div>
        {/* <h1>{correct}</h1> */}
       <div> <Box current={current} next={setCurrent} /> </div>
    </div>
}
    </>
  )
};


const Box = ({current, next}) => {
    const {quizData, correct, setCorrect, setExit} = useContext(QuizContext);
    const [ans, setAns] = useState("");
    const [selectAns, setSelectAns] = useState(false);
    // console.log(quizData[current]);

    const saveHandler = () => { 
        // console.log(ans);
        // console.log(selectAns);
        if(selectAns === true){
            setCorrect(correct+1);
        }
        setAns("");
        setSelectAns(false);
        if((current+1) === quizData.length){
            setExit(true);
        } else {
            next(current+1);
        }
    }


    // Sound for option click and quite button
    const sound = () => {
        let song = new Audio(duolingo);
        song.play();
    }

    const quitSound = () => {
        let wrongSong = new Audio(buzzerWrong);
        wrongSong.play();
    }

    return ( 
        <div className='box-container'>
            <div className="quiz-heading"> {current+1}) {quizData[current].description} </div>
            <div className="quiz-options">
                <div className={`quiz-option ${ans === "a" ? "select" : ''}`} onClick={() => {setAns("a"); setSelectAns(quizData[current].options[0].is_correct); sound();}} > {quizData[current].options[0].description} </div>
                <div className={`quiz-option ${ans === "b" ? "select" : ''}`} onClick={() => {setAns("b"); setSelectAns(quizData[current].options[1].is_correct); sound();}} > {quizData[current].options[1].description} </div>
                <div className={`quiz-option ${ans === "c" ? "select" : ''}`} onClick={() => { setAns("c"); setSelectAns(quizData[current].options[2].is_correct); sound();}} > {quizData[current].options[2].description} </div>
                <div className={`quiz-option ${ans === "d" ? "select" : ''}`} onClick={() => {setAns("d"); setSelectAns(quizData[current].options[3].is_correct); sound();}} > {quizData[current].options[3].description} </div>
            </div>
            <div className="quiz-btns">
                <div className="quiz-btn quiz-btn1" onClick={() => setAns("")}>Reset</div>
                <div className="quiz-btn quiz-btn2" onClick={saveHandler}>Save & Next</div>
                <div className="quiz-btn quiz-btn3" onClick={() => {setExit(true); quitSound();}}>Exit</div>
            </div>
        </div> 
    )
}

export default Quiz;



