import { StartScreen } from "./components/StartScreen/StartScreen"
import { GamingScreen } from "./components/Gaming/GamingScreen"
import { useCallback, useEffect, useState } from "react"
import { EndScreen } from "./components/End/EndScreen"
import "./App.css"
import { allWordsList } from "./data/words"

export const App = () => {

  const stages = [
    { id: 1, name: "menu" },
    { id: 2, name: "gaming" },
    { id: 3, name: "over" }
  ]

  const guessesQty: number = 5

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [allWords, setAllWords] = useState(allWordsList)
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState("")
  const [guessedLetters, setGuessedLetters] = useState(Array<string>)
  const [wrongLetters, setWrongLetters] = useState(Array<string>)
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)
  const [word, setWord] = useState("")

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  const pickWordAndCategory = useCallback(() => {

    //random category
    const categories = Object.keys(allWords)
    const randomCategory = categories[Math.floor(Math.random() * categories.length)]
    const randomWord = allWords[randomCategory][Math.floor(Math.random() * allWords[randomCategory].length)].toLowerCase()

    return { randomCategory, randomWord }
  }, [allWords])

  const startGame = useCallback(() => {
    clearLetterStates()
    //pick word and pick category
    const { randomCategory, randomWord } = pickWordAndCategory()
    const wordLetters: any = randomWord.split("")

    setPickedWord(randomWord)
    setPickedCategory(randomCategory)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  useEffect(() => {
    if (guesses <= 0) {
      setGameStage(stages[2].name)
      clearLetterStates()
    }
  }, [guesses])

  const removerSpecials = (text: string) => {
    // eliminando acentuação
    text = text.replace(/[ÀÁÂÃ]/, "A");
    text = text.replace(/[àáâã]/, "a");
    text = text.replace(/[ÈÉÊË]/, "E");
    text = text.replace(/[ÌÍ]/, "I");
    text = text.replace(/[ìí]/, "i");
    text = text.replace(/[ÓÒÔÕ]/, "O");
    text = text.replace(/[óòôõ]/, "o");
    text = text.replace(/[úù]/, "o");
    text = text.replace(/[Ç]/, "C");
    text = text.replace(/[ç]/, "c");
    return text.replace(/[^a-z0-9]/gi, '');
  }

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]
    const removeSpecials = uniqueLetters.map((letters) => removerSpecials(letters))
    const finalUniqueLetters = [...new Set(removeSpecials)]

    if (guessedLetters.length === finalUniqueLetters.length && gameStage === "gaming") {
      setScore((actualScore) => actualScore + 100)
      startGame()
    }

  }, [guessedLetters, letters, startGame])

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

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const retry = () => {
    startGame()
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[1].name)
  }

  const menu = () => {
    setScore(0)
    setGuesses(guessesQty)
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
        gameStage === "over" && <EndScreen pickedWord={pickedWord}
          score={score} menu={menu} retry={retry} />
      }
    </div>
  )
}
