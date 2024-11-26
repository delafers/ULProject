import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Mian from "./Main/Mian";
import Header from "./Header/Header";
import { AboutPageAsync } from "./Pages/AboutPage/AboutPage.async";
import "./app/styles/index.scss";
import { ThemeContext, Theme } from "./app/theme/ThemeContext";
import { useTheme } from "./app/theme/useTheme";
import { classNames } from "./app/helpers/classNames/classNames";

export default function App() {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {hovered: true, selected: true}, [theme])}>
      <Suspense fallback={<div>...Loading</div>}>
        <Header />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Routes>
          <Route path="/" element={<Mian />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
