import "./app.css";
import { FirstComponent } from "./components/FirstComponent";
import { TemplateExpressions } from "./components/TemplateExpressions";
import { Events } from "./components/Events";
import { Challenge } from "./components/Challenge";

export const App2 = () => {
  return (
    <>
      <h1>Olá mundo</h1>
      <p className="paragraph">Lets React!</p>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
    </>
  );
};
