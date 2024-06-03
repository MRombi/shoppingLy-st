import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Supermarket from "./pages/Supermarket";
import List from "./pages/List";
export const Context = React.createContext(null);

function App() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <Context.Provider value={[total, setTotal]}>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Supermarket setList={setList} />} />
          <Route
            path="/shopping-list"
            element={<List list={list} setList={setList} />}
          />
        </Routes>
      </main>
    </Context.Provider>
  );
}

export default App;
