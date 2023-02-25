import "./app.css";
import { FirstComponent } from "./components/FirstComponent";
import { TemplateExpressions } from "./components/TemplateExpressions";
import { Events } from "./components/Events";

export const App = () => {
  return (
    <>
      <h1>Olá mundo</h1>
      <p className="paragraph">Lets React!</p>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
    </>
  );
};
