import { Screens } from "../../interfaces/Screens"
import { Button } from "../Button/Button"
import "./EndScreen.css"

export const EndScreen = ({ func }: Screens) => {
  return (
    <>
      <div>
        <h1>
          End Screen
        </h1>
        <Button handleFunc={func} text="Voltar ao menu" />
      </div>
    </>
  )
}
