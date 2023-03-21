import { StartScreen } from "./components/StartScreen/StartScreen"
import { GamingScreen } from "./components/Gaming/GamingScreen"
import { useState } from "react"
import { EndScreen } from "./components/End/EndScreen"
import "./App.css"
import { allWordsList } from "./data/words"

export const App = () => {

  const stages = [
    { id: 1, name: "menu" },
    { id: 2, name: "gaming" },
    { id: 3, name: "over" }
  ]

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [allWords, setAllWords] = useState(allWordsList)
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    //random category
    const categories = Object.keys(allWords)
    const randomCategory = categories[Math.floor(Math.random() * categories.length)]
    const randomWord = allWords[randomCategory][Math.floor(Math.random() * allWords[randomCategory].length)].toLowerCase()

    return { randomCategory, randomWord }
  }

  const startGame = () => {
    //pick word and pick category
    const { randomCategory, randomWord } = pickWordAndCategory()
    console.log(randomCategory, randomWord)

    const wordLetters = randomWord.split("")
    console.log(wordLetters)

    setPickedWord(randomWord)
    setPickedCategory(randomCategory)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)

  }

  return (
    <div className="app">
      {
        gameStage === "menu" && <StartScreen startGame={startGame} />
      }
      {
        gameStage === "gaming" && <GamingScreen verifyLetter={verifyLetter} />
      }
      {
        gameStage === "over" && <EndScreen menu={retry} />
      }
    </div>
  )
}
