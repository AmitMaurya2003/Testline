import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import QuizHolder from './context/QuizHolder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizHolder>
      <App/>
      </QuizHolder> 
  </StrictMode>,
)
