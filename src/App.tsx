import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { AboutPageAsync } from "./components/pages/AboutPage/AboutPage.async";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./components/pages/MainPage/MainPage.async";

function App() {
  return (
    <div className="main">
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>

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
