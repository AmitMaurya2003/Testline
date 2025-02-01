import React from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result'
import Navbar from './pages/Navbar'; 
import { QuizContext } from './context/QuizHolder';
import { useContext } from 'react';

const App = () => {
  const {start, exit} = useContext(QuizContext);

  return (
     <>
     <Navbar/> 
      { 
        exit === false ?
         <>
           {
             start === true ? <Quiz/> : <Start/>
           }
          </>
        : <Result/>
      }
     </>
  )
}

export default App;










// import React, { useEffect, useState } from "react"; 
// import axios from "axios";
// import Home from "./pages/Home";
// import './App.css';

// const App = () => {

//   const [questions , setQuestions] = useState([]);
//   const [error, setError] = useState("");
  
//   const URL = "http://localhost:8080";
//   const fectchData = async (url) => {
//     try {
//      const response = await axios.get(url);
//      console.log(response.data.questions);
//      setQuestions(response.data.questions);
//     } catch (err) {
//      // console.log("error comes during fetch");
//      setError(err.message);
//     }
//  };

//   useEffect(() => {
//     fectchData(`${URL}/quiz-data`);
//   }, []);

//   return (
//     <> 
//     <h1>Quiz</h1>

//     {error !== " " && <h2>{error}</h2> }
//      <div>
//        {questions.map((question) => {
//         const { id , description, options} = question;
//         return (
//           <div key={id}>
//             <h3>{description}</h3>
//             <ul>
//               {options.map((option, i) => { 
//                 const {description} = option;
//                 return (
//                 <li key={i}>{description}</li>
//                 )
//               })}
//             </ul>
//             </div>
//         )
//        })}
//      </div>
//      </>
//   );
// };

// export default App;
