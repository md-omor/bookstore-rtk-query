import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookAdd from "./pages/BookAdd";
import BookEdit from "./pages/BookEdit";
import Home from "./pages/Home";

const App = () => {
  const [inputText, setInputText] = useState("");
  return (
    <Router>
      <Navbar inputText={inputText} setInputText={setInputText} />
      <Routes>
        <Route path="/" element={<Home inputText={inputText} />} />
        <Route path="/books/add" element={<BookAdd />} />
        <Route path="/books/edit/:bookId" element={<BookEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
