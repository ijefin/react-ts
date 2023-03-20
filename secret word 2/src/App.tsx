import './App.css'
import { StartScreen } from './components/StartScreen/StartScreen'
import { Stages } from "./interfaces/Stages"
import { allWordsList } from "../words"
import { useCallback, useState, useEffect, useRef } from 'react'
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
  const [pickedCategory, setpickedCategory] = useState("")
  const [pickedWord, setPickedWord] = useState("")
  const [letters, setletters] = useState([""])
  const [guesses, setGuesses] = useState(5)

  useEffect(() => {
    if (guesses <= 0) {
      setGameStage(stages[2].name)
    }
  }, [guesses])

  const removeGuesses = () => {
    setGuesses(guesses - 1)
  }

  const pickWordAndCategory = () => {

    //pick a random category
    const categories = Object.keys(allWordsList)
    const category = Math.floor(Math.random() * categories.length)
    const randomCategory = categories[category]

    //pick a random word
    const words = Object.values(allWordsList)
    const randomWord = words[category][Math.floor(Math.random() * words.length)].toLowerCase()

    setpickedCategory(randomCategory)
    setPickedWord(randomWord)

    return { randomCategory, randomWord }
  }

  const handleMenuScreen = () => {
    setGameStage(stages[0].name)
  }

  //Starts the game
  const startGame = () => {
    const { randomCategory, randomWord } = pickWordAndCategory()

    //generate a splited array with selected word
    const listOfLetters = randomWord.split("")
    setletters(listOfLetters)
    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  return (
    <div className="app">
      {gameStage === "menu" && <StartScreen func={startGame} />}
      {gameStage === "gaming" && <GamingScreen verifyGuesses={removeGuesses} guesses={guesses} secretWord={letters} tip={pickedCategory} func={verifyLetter} />}
      {gameStage === "end" && <EndScreen func={handleMenuScreen} />}
    </div>
  )
}

export default App
