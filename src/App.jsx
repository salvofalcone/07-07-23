import "./App.css";
import "./App.scss";
import Typography from "./components/Typography/Typography";
import Colors from "./components/Colors/Colors";
import Grid from "./components/Grid/Grid";
import InputToggle from "./components/Form/InputToggle";
import Buttons__View from "./components/Buttons__View/Buttons__View";

function App() {
  return (
    <>
      <h1 className="heading1 MainTitle">SCSS Library</h1>

      <hr />

      <Buttons__View />

      <hr />

      <InputToggle />

      <hr />

      <div className="Top">
        <Typography />
        <Colors />
      </div>
      <Grid />
    </>
  );
}

export default App;
