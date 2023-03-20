import { Screens } from "../../interfaces/Screens"
import { Button } from "../Button/Button"
import "./EndScreen.css"

export const EndScreen = () => {
  return (
    <>
      <div>
        <h1>
          Você não acertou a palavra!
        </h1>
        <Button handleFunc={() => window.location.reload()} text="Reiniciar" />
      </div>
    </>
  )
}
