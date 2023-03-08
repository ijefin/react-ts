import "./App.css"
import { StartScreen } from "./componentes/StartScreen/StartScreen"
import { useCallback, useState } from "react"
import { words } from "./data/words.js"
import { Game } from "./componentes/Game/Game"
import GameOver from "./componentes/GameOver/GameOver"

export const App = () => {

  interface stage {
    id: number
    name: string
  }

  const stages: Array<stage> = [
    { id: 1, name: "menu" },
    { id: 2, name: "playing" },
    { id: 3, name: "end" },
  ]

  const [gameStage, setgameStage] = useState(stages[0].name)
  const [word, setWord] = useState(words)
  const [pickedLetters, setPickedLetters] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    const categories = Object.keys(word)
    const category = Math.floor(Math.random() * categories.length)
    const listOfWords = Object.values(word)
    console.log(listOfWords)
    console.log(listOfWords[Math.floor(Math.random() * listOfWords.length)])

    setPickedCategory(categories[category])
  }

  const startGame = () => {


    setgameStage(stages[1].name)
  }

  const handlePlay = () => {
    setgameStage(stages[1].name)
  }

  const handleFinish = () => {
    setgameStage(stages[2].name)
  }

  const handleInit = () => {
    setgameStage(stages[0].name)
  }

  return (
    <div className="app">
      {gameStage === "menu" && < StartScreen set={handlePlay} />}
      {gameStage === "playing" && < Game handleFinish={handleFinish} />}
      {gameStage === "end" && < GameOver handleInit={handleInit} />}
      <button onClick={pickWordAndCategory}>teste</button>
    </div>
  )
}
