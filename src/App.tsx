import { Suspense, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { AboutPageAsync } from "./components/pages/AboutPage/AboutPage.async";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./components/pages/MainPage/MainPage.async";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`main ${theme}`}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <button onClick={toggleTheme}>Toggle</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
