import './App.css'
import { StartScreen } from './components/StartScreen/StartScreen'
import { Stages } from "./interfaces/Stages"
import { allWordsList } from "../words"
import { useCallback, useState, useEffect } from 'react'
import { GamingScreen } from './components/Gaming/GamingScreen'
import { EndScreen } from './components/End/EndScreen'

const stages: Array<Stages> = [
  { id: 1, name: "menu" },
  { id: 2, name: "gaming" },
  { id: 3, name: "end" }
]


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [word, setWords] = useState(allWordsList)
  console.log(word)

  const handleMenuScreen = () => {
    setGameStage(stages[0].name)
  }

  //Starts the game
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //process the letter input



  return (
    <div className="app">
      {gameStage === "menu" && <StartScreen func={startGame} />}
      {gameStage === "gaming" && <GamingScreen func={verifyLetter} />}
      {gameStage === "end" && <EndScreen func={handleMenuScreen} />}
    </div>
  )
}

export default App
