import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";
import NotFound from './components/NotFound';
import Board from "./components/Board";
import Today from './components/Today';
import Hourly from "./components/Hourly";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/result" element={<ResultPage />}>
        {/* <Route path="/result" element={<Board />}>
          <Route path=":today" element={<Today />} />
          <Route path=":hourly" element={<Hourly />} />
        </Route> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
