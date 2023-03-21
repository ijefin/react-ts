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
  const [letters, setLetters] = useState(Array<string>)
  const [guessedLetters, setGuessedLetters] = useState(Array<string>)
  const [wrongLetters, setWrongLetters] = useState(Array<string>)
  const [guesses, setGuesses] = useState(5)
  const [score, setScore] = useState(0)

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

    setPickedWord(randomWord)
    setPickedCategory(randomCategory)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }

  const verifyLetter = (letter: string) => {

    //check if letter has alredy been utilized
    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
      return
    }

    //push guessed or remove a guess
    if (letters.includes(letter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, letter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, letter
      ])
    }

    console.log(guessedLetters)
    console.log(wrongLetters)
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
        gameStage === "gaming" && <GamingScreen
          verifyLetter={verifyLetter}
          pickedCategory={pickedCategory}
          pickedWord={pickedWord}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      }
      {
        gameStage === "over" && <EndScreen menu={retry} />
      }
    </div>
  )
}
