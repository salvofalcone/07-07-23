import { useState } from "react";

import "./App.css";
import "./App.scss";

import Typography from "./components/Typography/Typography";
import Colors from "./components/Colors/Colors";
import Grid from "./components/Grid/Grid";
import Buttons__View from "./components/Buttons__View/Buttons__View";
import InputToggle from "./components/Form/InputToggle";
import InputText from "./components/Form/InputText";
import InputPassword from "./components/Form/InputPassword";
import InputSelect from "./components/Form/InputSelect";
import DropdownSelect from "./components/Form/DropdownSelect";

function App() {
  const [inputTextValue, setInputTextValue] = useState();
  const [inputPasswordValue, setInputPasswordValue] = useState();
  const [inputSelectValue, setInputSelectValue] = useState();
  const [inputDropdownValue, setInputDropdownValue] = useState();

  const options = {
    name: "products",
    id: "products",
    options: [
      { id: 1, label: "Basket ", value: "basket" },
      { id: 2, label: "Soccer", value: "soccer" },
      { id: 3, label: "Tennis", value: "tennis" },
    ],
  };

  return (
    <>
      <form className="mainForm">
        <h3 className="heading3">FORM</h3>
        {/******************* INPUT *******************/}
        <InputText
          id={"name"}
          name="name"
          placeholder="Your name"
          label={"Insert your name"}
          errorMessage={"NOOOOOOOO CHE SUCCEDEEEEEEEE?!"}
          handleChange={setInputTextValue}
          /* disable */
        />

        <InputPassword
          id={"password"}
          name="password"
          placeholder="Your password"
          label={"Insert your password"}
          // errorMessage={"NOOOOOOOO CHE SUCCEDEEEEEEEE?!"}
          handleChange={setInputPasswordValue}
          /* disable */
        />

        {/******************* SELECTION *******************/}
        <InputSelect
          options={options}
          defaultValue={options[0]}
          handleChange={setInputSelectValue}
        />

        <DropdownSelect
          options={options}
          handleChange={setInputDropdownValue}
        />
      </form>

      {/* <h1 className="heading1 MainTitle">SCSS Library</h1> */}

      <Buttons__View />
      <InputToggle />

      <div className="Top">
        <Typography />
        <Colors />
      </div>

      <Grid />
    </>
  );
}

export default App;
