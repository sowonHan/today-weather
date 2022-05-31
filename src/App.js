import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";
import NotFound from "./components/NotFound";
import Today from "./components/Today";
import Hourly from "./components/Hourly";

function App() {
  return (
    <Routes>
      <Route path={`/${process.env.REACT_APP_HOST}`} element={<MainPage />} />
      <Route path="/result" element={<ResultPage />}>
        <Route path=":today" element={<Today />} />
        <Route path=":hourly" element={<Hourly />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
