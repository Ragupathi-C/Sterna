import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom"
import { IndexPage } from "./components/Home/Home";




function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
