import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Supermarket from "./pages/Supermarket";
import List from "./pages/List";

function App() {
  const [list, setList] = useState([]);
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Supermarket setList={setList} />} />
        <Route path="/shopping-list" element={<List list={list} />} />
      </Routes>
    </main>
  );
}

export default App;
