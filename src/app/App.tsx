import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "helpers/classNames/classNames";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("main", {}, [theme])}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <button onClick={toggleTheme}>Toggle</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
