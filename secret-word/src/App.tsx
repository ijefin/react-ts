import "./App.css"
import { StartScreen } from "./componentes/StartScreen/StartScreen"
import { useCallback, useState } from "react"
import { words } from "./data/words.js"

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

  return (
    <div className="app">
      {gameStage === "menu" && < StartScreen />}
      {/* {gameStage === "playing" && < StartScreen />}
      {gameStage === "end" && < StartScreen />} */}
    </div>
  )
}
