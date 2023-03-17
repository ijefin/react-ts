import { Screens } from "../../interfaces/Screens"
import { Button } from "../Button/Button"
import "./GamingScreen"

export const GamingScreen = ({ func }: Screens) => {
  return (
    <>
      <div>
        <h1>
          Gaming Screen
        </h1>
        <Button handleFunc={func} text="Iniciar" />
      </div>
    </>
  )
}
