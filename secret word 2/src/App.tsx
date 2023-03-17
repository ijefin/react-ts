import './App.css'
import { StartScreen } from './components/StartScreen/StartScreen'
import { Stages } from "./interfaces/Stages"
import { allWordsList } from "../words"
import { useCallback, useState, useEffect } from 'react'
import { GamingScreen } from './components/Gaming/GamingScreen'

const stages: Array<Stages> = [
  { id: 1, name: "menu" },
  { id: 2, name: "gaming" },
  { id: 3, name: "end" }
]

console.log(allWordsList)

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)

  return (
    <div className="app">
      {gameStage === "menu" && <StartScreen />}
      {gameStage === "gaming" && <GamingScreen />}
      {gameStage === "end" && <h1>End Game Screen</h1>}
    </div>
  )
}

export default App
