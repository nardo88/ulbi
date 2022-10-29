import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "helpers/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("main", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Toggle</button>
      <AppRouter />
    </div>
  );
}

export default App;
