import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters/Characters";
import Character from "./pages/Characters/[id]";
import Quotes from "./pages/Quotes/Quotes";
import Quote from "./pages/Quotes/[id]";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/characters" element={<Characters />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/quotes/:id" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;