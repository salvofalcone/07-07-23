import "./App.css";
import "./App.scss";
import Typography from "./components/Typography/Typography";
import Colors from "./components/Colors/Colors";
import Grid from "./components/Grid/Grid";

function App() {
  return (
    <>
      <h1 className="heading1 MainTitle">SCSS Library</h1>

      <div className="Top">
        <Typography />
        <Colors />
      </div>

      <Grid />
    </>
  );
}

export default App;
