import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "./App.css";
import "./App.scss";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import Header from "./components/Header/Header";
import Typography from "./components/Typography/Typography";
import Colors from "./components/Colors/Colors";
import Grid from "./components/Grid/Grid";
import Buttons__View from "./components/Buttons__View/Buttons__View";
import InputToggle from "./components/Form/InputToggle";
import InputText from "./components/Form/InputText";
import InputPassword from "./components/Form/InputPassword";
import InputSelect from "./components/Form/InputSelect";
import DropdownSelect from "./components/Form/DropdownSelect";
import InputCheckbox from "./components/Form/InputCheckbox";

function App() {
  const [inputTextValue, setInputTextValue] = useState();
  const [inputPasswordValue, setInputPasswordValue] = useState();
  const [inputSelectValue, setInputSelectValue] = useState();
  const [inputDropdownValue, setInputDropdownValue] = useState();

  const options = {
    name: "products",
    id: "products",
    options: [
      { id: 0, label: "Choose an option ", value: "default" },
      { id: 1, label: "Basket ", value: "basket" },
      { id: 2, label: "Soccer", value: "soccer" },
      { id: 3, label: "Tennis", value: "tennis" },
    ],
  };

  return (
    <>
      <Header />

      <div className="SwiperContainer">
        <Swiper
          navigation={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            {/* <InputCheckbox checked /> */}
            <form className="mainForm">
              <h2 className="heading2">FORM</h2>

              <InputText
                id={"name"}
                name="name"
                placeholder="Your name"
                label={"Insert your name"}
                errorMessage={"NOOOOOOOO CHE SUCCEDEEEEEEEE?!"}
                handleChange={setInputTextValue}
              />

              <InputPassword
                id={"password"}
                name="password"
                placeholder="Your password"
                label={"Insert your password"}
                // errorMessage={"NOOOOOOOO CHE SUCCEDEEEEEEEE?!"}
                handleChange={setInputPasswordValue}
              />

              <InputSelect
                options={options}
                defaultValue={options?.options[0]?.label}
                handleChange={setInputSelectValue}
              />

              <DropdownSelect
                options={options}
                handleChange={setInputDropdownValue}
              />
            </form>

            <div className="mainForm">
              <h2 className="heading2">TOGGLE AND CHECKBOX</h2>

              <InputToggle />
              <InputCheckbox checked />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <Buttons__View />
          </SwiperSlide>

          <SwiperSlide>
            <Typography />
          </SwiperSlide>

          <SwiperSlide>
            <Colors />
          </SwiperSlide>

          <SwiperSlide>
            <Grid />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default App;
